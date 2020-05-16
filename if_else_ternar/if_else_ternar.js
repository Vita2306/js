// let userName = prompt('Your name ?','');
// console.log(`name is ${userName}`);

// let year = prompt('what year?','');
// if( year == 2020 ){
//     console.log('yes it is 2020')
// }else console.log('no now 2020');

// year==2020 ? console.log('yes'): console.log('no');
// year > 2020 ? console.log('future'): year== 2020 ? console.log('now'): year<2020 ? console.log('past'): console.log('not a number');
//======================================================
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
// let question = prompt('What\'s the "официальное название" JavaScript?', '');
// question=='ECMAScript'? console.log('yes') : console.log('no');

//========================================================
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.

// let number = prompt('enter number','');
// number > 0 ? console.log('>1'): number < 0? console.log('<1'): number == 0 ? console.log('0') : console.log('string');

//=======================================================

// Перепишите if с использованием условного оператора '?':
//
// let result;
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

// let a = prompt('a=','');
// let b = prompt('b=','');
//
// (a + b)<4? console.log('<4'): console.log('>4');

//========================================================

// Перепишите if..else с использованием нескольких операторов '?'.
//     Для читаемости рекомендуется разбить код на несколько строк.
//
//     let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = 'lost?';
// }

let message = prompt('твоя посада','');
 message == 'Сотрудник'? console.log('Привет'):
     message == 'Директор'? console.log('Здравствуйте'):
         message == ''? console.log('Нет логина'): console.log('lost?');