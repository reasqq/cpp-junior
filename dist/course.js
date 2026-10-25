export const XP_PER_TASK = 50;
export const LEVELS = [
  {xp:0,name:'Новичок'}, {xp:150,name:'Первые строки'}, {xp:350,name:'Логика'},
  {xp:600,name:'Практик'}, {xp:900,name:'Уверенный старт'}, {xp:1350,name:'Junior · основы'}
];
const task = (id,title,code,answer,hint,explanation) => ({id,title,code,answer,hint,explanation});
export const lessons = [
  {id:'variables-1',topic:'Переменные',title:'Знакомство с переменными',subtitle:'Значения, присваивание и первый вывод',theory:'Переменная — именованное место для значения. int хранит целые числа. Оператор = присваивает значение справа переменной слева. cout выводит данные, а << соединяет части вывода.',example:'int points = 10;\npoints = points + 2;\ncout << points;  // 12',tasks:[
    task('v1','Корзина с фруктами','int apples = 4;\nint pears = 3;\ncout << apples + pears;','7','Сложи значения двух переменных.','apples хранит 4, pears — 3. Выражение 4 + 3 даёт 7.'),
    task('v2','Обновляем счёт','int score = 10;\nscore = score + 5;\ncout << score;','15','Сначала вычисляется правая часть присваивания.','К старому значению 10 прибавляем 5, затем записываем 15 в score.'),
    task('v3','Копия значения','int a = 5;\nint b = a;\na = 9;\ncout << a << " " << b;','9 5','После копирования b хранит собственное значение.','b получает 5 и не меняется при изменении a. Вывод: 9 5.')
  ]},
  {id:'variables-2',topic:'Переменные',title:'Арифметика без сюрпризов',subtitle:'Целочисленное деление, остаток и double',theory:'Если оба операнда / — целые, дробная часть результата отбрасывается. Оператор % возвращает остаток от целочисленного деления. Если один из операндов имеет тип double, деление сохраняет дробную часть.',example:'cout << 9 / 2;    // 4\ncout << 9 % 2;    // 1\ncout << 9.0 / 2;  // 4.5',tasks:[
    task('v4','Делим поровну','int total = 17;\nint boxes = 5;\ncout << total / boxes;','3','Оба числа имеют тип int.','17 / 5 равно 3 при целочисленном делении: дробная часть отбрасывается.'),
    task('v5','Что осталось?','int total = 17;\ncout << total % 5;','2','Найди остаток после распределения по 5.','17 = 3 × 5 + 2. Поэтому остаток равен 2.'),
    task('v6','Сохраняем дробь','double distance = 7;\ncout << distance / 2;','3.5','Левый операнд имеет тип double.','Деление с double сохраняет дробную часть. 7 / 2 даёт 3.5.')
  ]},
  {id:'variables-3',topic:'Переменные',title:'Маленькие расчёты',subtitle:'Собираем выражения в полезные программы',theory:'Умножение, деление и остаток вычисляются раньше сложения и вычитания. Скобки меняют порядок. Для обмена значений двух переменных можно использовать временную переменную.',example:'int cost = 80;\nint count = 2;\nint total = cost * count;\ncout << total;  // 160',tasks:[
    task('v7','Стоимость заказа','int price = 120;\nint count = 3;\nint discount = 40;\ncout << price * count - discount;','320','Сначала умножь цену на количество.','120 × 3 = 360. После скидки 40 получаем 320.'),
    task('v8','Часы и минуты','int minutes = 135;\ncout << minutes / 60 << " " << minutes % 60;','2 15','Деление даст полные часы, остаток — минуты.','135 / 60 = 2, а 135 % 60 = 15. Вывод: 2 15.'),
    task('v9','Поменять местами','int a = 3, b = 8;\nint temp = a;\na = b;\nb = temp;\ncout << a << " " << b;','8 3','Проследи значения после каждой строки.','temp сохраняет 3. В a записывается 8, в b — сохранённое 3.')
  ]},
  {id:'conditions-1',topic:'Условия',title:'Программа делает выбор',subtitle:'if, else и операторы сравнения',theory:'if выполняет блок, если условие истинно. Иначе выполняется else. Сравнения: >, <, >=, <=, ==, !=. Для проверки равенства используют ==, для присваивания — =.',example:'int n = 4;\nif (n > 0) {\n  cout << "positive";\n} else {\n  cout << "non-positive";\n}',tasks:[
    task('c1','Погода за окном','int temperature = 18;\nif (temperature >= 20) {\n  cout << "warm";\n} else {\n  cout << "cool";\n}','cool','Проверь: 18 больше или равно 20?','Условие ложно, поэтому выполняется else и выводится cool.'),
    task('c2','На самой границе','int age = 18;\nif (age >= 18) cout << "adult";\nelse cout << "child";','adult','Оператор >= включает равенство.','18 >= 18 истинно. Программа выводит adult.'),
    task('c3','Чётное число','int n = 14;\nif (n % 2 == 0) cout << "even";\nelse cout << "odd";','even','Чётное число делится на 2 без остатка.','Остаток 14 % 2 равен 0, поэтому результат — even.')
  ]},
  {id:'conditions-2',topic:'Условия',title:'Несколько условий',subtitle:'Логические &&, || и !',theory:'&& означает «и»: нужны оба условия. || означает «или»: достаточно одного. ! меняет истину на ложь и наоборот. bool хранит true или false; cout по умолчанию выводит их как 1 или 0.',example:'bool hasTicket = true;\nbool isOpen = true;\nif (hasTicket && isOpen)\n  cout << "enter";',tasks:[
    task('c4','Попасть в диапазон','int x = 7;\nif (x >= 1 && x <= 10) cout << "inside";\nelse cout << "outside";','inside','Обе части условия должны быть истинны.','7 >= 1 и 7 <= 10 истинны. Результат — inside.'),
    task('c5','Любое основание','bool weekend = false;\nbool holiday = true;\nif (weekend || holiday) cout << "rest";\nelse cout << "work";','rest','Для || достаточно одного true.','holiday равен true, поэтому всё условие истинно. Вывод: rest.'),
    task('c6','Инверсия','bool ready = false;\ncout << !ready << " " << (3 > 5);','1 0','Без boolalpha true печатается как 1, false — как 0.','!false — это true (1). Сравнение 3 > 5 ложно (0). Вывод: 1 0.')
  ]},
  {id:'conditions-3',topic:'Условия',title:'Ветвления на практике',subtitle:'Цепочки else if и независимые проверки',theory:'В цепочке if / else if / else выполняется только первая подходящая ветка. Два отдельных if проверяются независимо. Обращай внимание на границы: > и >= ведут себя по-разному.',example:'int points = 75;\nif (points >= 90) cout << "A";\nelse if (points >= 60) cout << "B";\nelse cout << "C";',tasks:[
    task('c7','Оценка за тест','int points = 85;\nif (points >= 90) cout << "A";\nelse if (points >= 60) cout << "B";\nelse cout << "C";','B','Проверяй ветки сверху вниз до первой истинной.','85 >= 90 ложно, но 85 >= 60 истинно. Выводится B.'),
    task('c8','Две проверки','int x = 5;\nif (x > 0) cout << "A";\nif (x < 10) cout << "B";','AB','Между выводами нет пробела. Оба if независимы.','Оба условия истинны. Сначала выводится A, затем B без разделителя: AB.'),
    task('c9','Точная граница','int sum = 1000;\nint discount = 0;\nif (sum > 1000) discount = 100;\nelse if (sum >= 500) discount = 50;\ncout << sum - discount;','950','1000 не больше 1000. Перейди к следующей проверке.','Первая ветка не выполняется. Вторая задаёт скидку 50. 1000 − 50 = 950.')
  ]},
  {id:'loops-1',topic:'Циклы',title:'Повторяем с for',subtitle:'Счётчик, условие продолжения и шаг',theory:'for состоит из начального значения, условия продолжения и шага. Сначала задаётся счётчик, перед каждым повторением проверяется условие, после тела выполняется шаг. i++ увеличивает i на 1.',example:'for (int i = 1; i <= 3; i++) {\n  cout << i << " ";\n}  // 1 2 3',tasks:[
    task('l1','Первые повторения','for (int i = 0; i < 3; i++) {\n  cout << i << " ";\n}','0 1 2','Условие i < 3 не включает 3.','Цикл выполняется для i = 0, 1, 2. При i = 3 условие ложно.'),
    task('l2','Накопить сумму','int sum = 0;\nfor (int i = 1; i <= 4; i++) {\n  sum += i;\n}\ncout << sum;','10','sum += i означает sum = sum + i.','В sum последовательно добавляются 1, 2, 3 и 4. Их сумма равна 10.'),
    task('l3','Шагаем через один','for (int i = 2; i <= 6; i += 2) {\n  cout << i << " ";\n}','2 4 6','После каждого повторения i увеличивается на 2.','Счётчик принимает значения 2, 4 и 6. Следующее 8 не проходит условие.')
  ]},
  {id:'loops-2',topic:'Циклы',title:'Повторяем с while',subtitle:'Условие остановки и изменение состояния',theory:'while проверяет условие перед каждым выполнением тела. Если оно сразу ложно, тело не выполнится ни разу. Внутри цикла нужно изменять состояние так, чтобы условие когда-нибудь стало ложным.',example:'int fuel = 2;\nwhile (fuel > 0) {\n  fuel--;\n}\ncout << fuel;  // 0',tasks:[
    task('l4','Обратный отсчёт','int n = 3;\nwhile (n > 0) {\n  cout << n << " ";\n  n--;\n}','3 2 1','Вывод происходит раньше уменьшения n.','Сначала печатается 3, затем 2 и 1. При n = 0 цикл останавливается.'),
    task('l5','Сколько шагов?','int n = 20;\nint steps = 0;\nwhile (n > 1) {\n  n /= 2;\n  steps++;\n}\ncout << steps;','4','Деление целочисленное. Выпиши новые значения n.','Значения n после деления: 10, 5, 2, 1. Это четыре выполнения тела.'),
    task('l6','Цифры числа','int n = 507;\nint sum = 0;\nwhile (n > 0) {\n  sum += n % 10;\n  n /= 10;\n}\ncout << sum;','12','% 10 берёт последнюю цифру, / 10 убирает её.','В сумму попадают цифры 7, 0, 5. Результат: 12.')
  ]},
  {id:'loops-3',topic:'Циклы',title:'Финишная практика',subtitle:'Соединяем переменные, условия и циклы',theory:'break немедленно завершает ближайший цикл. continue пропускает остаток текущего повторения и переходит к следующему. Для уверенного чтения кода веди таблицу значений переменных по шагам.',example:'for (int i = 1; i <= 4; i++) {\n  if (i == 2) continue;\n  cout << i << " ";\n}  // 1 3 4',tasks:[
    task('l7','Остановиться вовремя','for (int i = 1; i <= 5; i++) {\n  if (i == 4) break;\n  cout << i << " ";\n}','1 2 3','При i = 4 выход происходит до cout.','Печатаются 1, 2, 3. break останавливает цикл до вывода 4.'),
    task('l8','Пропустить нечётные','for (int i = 1; i <= 5; i++) {\n  if (i % 2 != 0) continue;\n  cout << i << " ";\n}','2 4','Нечётные значения не доходят до cout.','continue пропускает вывод для 1, 3, 5. Остаются 2 и 4.'),
    task('l9','Итоговый расчёт','int result = 0;\nfor (int i = 1; i <= 6; i++) {\n  if (i % 2 == 0) result += i;\n  else result -= 1;\n}\ncout << result;','9','При чётном i прибавь i, при нечётном вычти 1.','Промежуточные значения: −1, 1, 0, 4, 3, 9. Или 2 + 4 + 6 − 3 = 9.')
  ]}
];
export const tasks = lessons.flatMap(l=>l.tasks);
export function normalizeAnswer(value) {
  const s = String(value).trim().replace(/\s+/g,' ');
  return /^-?\d+,\d+$/.test(s) ? s.replace(',','.') : s;
}
export function isCorrect(taskId, value) {
  const t=tasks.find(t=>t.id===taskId);
  if (!t || !normalizeAnswer(value)) return false;
  const a=normalizeAnswer(value), b=normalizeAnswer(t.answer);
  if (/^-?\d+(\.\d+)?$/.test(a) && /^-?\d+(\.\d+)?$/.test(b)) return Number(a)===Number(b);
  return a===b;
}
export const initialState = () => ({version:1,answers:{},days:{},seconds:{},startedAt:new Date().toISOString()});
export function cleanState(input) {
  const s=initialState();
  if (!input || input.version!==1) return s;
  s.startedAt=typeof input.startedAt==='string'?input.startedAt:s.startedAt;
  for (const t of tasks) {
    const a=input.answers?.[t.id];
    if(a && typeof a==='object') s.answers[t.id]={attempts:Math.max(0,Math.min(100000,Math.floor(Number(a.attempts)||0))),draft:typeof a.draft==='string'?a.draft.slice(0,2000):'',solved:a.solved===true,revealed:a.revealed===true && a.attempts>0,hinted:a.hinted===true};
  }
  for(const [k,v] of Object.entries(input.days||{})) if(/^\d{4}-\d{2}-\d{2}$/.test(k) && v===true) s.days[k]=true;
  for(const [k,v] of Object.entries(input.seconds||{})) if(/^\d{4}-\d{2}-\d{2}$/.test(k) && Number.isFinite(v) && v>=0) s.seconds[k]=Math.floor(v);
  return s;
}
export function submitAnswer(state,taskId,value,dateKey) {
  if(!tasks.some(t=>t.id===taskId)) return {kind:'invalid',xp:0};
  if(!normalizeAnswer(value)) return {kind:'empty',xp:0};
  const prev=state.answers[taskId]||{attempts:0};
  const correct=isCorrect(taskId,value);
  const earned=correct && !prev.solved;
  state.answers[taskId]={...prev,draft:value,attempts:prev.attempts+1,solved:prev.solved||correct};
  state.days[dateKey]=true;
  return {kind:correct?'correct':'incorrect',xp:earned?XP_PER_TASK:0};
}
export function revealSolution(state,taskId) {
  const a=state.answers[taskId];
  if(!a?.attempts) return false;
  a.revealed=true; return true;
}
export function progress(state) {
  const solved=tasks.filter(t=>state.answers[t.id]?.solved).length;
  const xp=solved*XP_PER_TASK;
  let level=0; LEVELS.forEach((l,i)=>{if(xp>=l.xp)level=i});
  return {solved,xp,level,percent:Math.round(solved/tasks.length*100),completedLessons:lessons.filter(l=>l.tasks.every(t=>state.answers[t.id]?.solved)).length};
}
export const lessonSolved=(state,l)=>l.tasks.filter(t=>state.answers[t.id]?.solved).length;
export const nextLesson=state=>lessons.findIndex(l=>lessonSolved(state,l)<l.tasks.length);
