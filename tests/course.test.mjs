import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {writeFileSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {tasks,lessons,initialState,cleanState,submitAnswer,revealSolution,progress,normalizeAnswer,isCorrect,nextLesson} from '../dist/course.js';
const DAY='2026-10-25';
test('no solution before a nonempty attempt, no XP for empty or wrong answers',()=>{
 const s=initialState();
 assert.equal(revealSolution(s,'v1'),false);
 assert.deepEqual(submitAnswer(s,'v1',' \n ',DAY),{kind:'empty',xp:0});
 assert.equal(revealSolution(s,'v1'),false);assert.equal(s.answers.v1,undefined);
 assert.deepEqual(submitAnswer(s,'v1','wrong',DAY),{kind:'incorrect',xp:0});
 assert.equal(progress(s).xp,0);assert.equal(revealSolution(s,'v1'),true);
 assert.equal(s.answers.v1.revealed,true);assert.equal(s.days[DAY],true);
});
test('a correct answer awards XP only once, survives reload and later mistakes',()=>{
 const s=initialState();assert.deepEqual(submitAnswer(s,'v1','7',DAY),{kind:'correct',xp:50});
 assert.deepEqual(submitAnswer(s,'v1','7',DAY),{kind:'correct',xp:0});
 assert.deepEqual(submitAnswer(s,'v1','8',DAY),{kind:'incorrect',xp:0});
 const restored=cleanState(JSON.parse(JSON.stringify(s)));
 assert.equal(progress(restored).xp,50);assert.equal(restored.answers.v1.attempts,3);
 assert.deepEqual(submitAnswer(restored,'v1','7',DAY),{kind:'correct',xp:0});
});
test('comparison accepts whitespace and decimal notation, respects textual output',()=>{
 assert.equal(isCorrect('l1',' 0\n1  2\n'),true);assert.equal(isCorrect('v6','3,5'),true);
 assert.equal(isCorrect('v6','3.500'),true);assert.equal(isCorrect('c7','b'),false);
 assert.equal(isCorrect('c8','A B'),false);assert.equal(isCorrect('c8','AB'),true);
 assert.equal(isCorrect('v1','7<script>'),false);assert.equal(isCorrect('unknown','7'),false);
});
test('all 27 tasks advance through 9 lessons to final Junior level',()=>{
 const s=initialState();assert.equal(nextLesson(s),0);
 for(const l of lessons){for(const t of l.tasks)submitAnswer(s,t.id,t.answer,DAY)}
 assert.deepEqual(progress(s),{solved:27,xp:1350,level:5,percent:100,completedLessons:9});
 assert.equal(nextLesson(s),-1);
});
test('damaged stored data is sanitized and unattempted solutions stay hidden',()=>{
 const s=cleanState({version:1,answers:{v1:{revealed:true,attempts:0},v2:{attempts:-1},oops:{solved:true}},days:{garbage:true},seconds:{[DAY]:NaN}});
 assert.equal(s.answers.v1.revealed,false);assert.equal(s.answers.v2.attempts,0);
 assert.equal(s.answers.oops,undefined);assert.deepEqual(s.days,{});assert.deepEqual(s.seconds,{});
 assert.equal(progress(cleanState({version:99})).xp,0);
});
test('every expected answer agrees with actual C++ execution',()=>{
 const dir=mkdtempSync(join(tmpdir(),'cpp-junior-'));
 try{for(const t of tasks){
   const source=join(dir,'main.cpp'),exe=join(dir,'main');
   writeFileSync(source,'#include <iostream>\nusing namespace std;\nint main(){\n'+t.code+'\nreturn 0;\n}');
   execFileSync('g++',['-std=c++17',source,'-o',exe],{timeout:10000});
   const actual=execFileSync(exe,[],{encoding:'utf8',timeout:2000});
   assert.equal(normalizeAnswer(actual),normalizeAnswer(t.answer),t.id+' has an incorrect expected answer');
 }}finally{rmSync(dir,{recursive:true,force:true})}
});
