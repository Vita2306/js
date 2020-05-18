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

// let message = prompt('твоя посада','');
//  message == 'Сотрудник'? console.log('Привет'):
//      message == 'Директор'? console.log('Здравствуйте'):
//          message == ''? console.log('Нет логина'): console.log('lost?');
//================================================================

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
// let age = prompt('enter age','');

// if (14<=age<=90){
//     console.log(`your age is ${age} ok`);
// }else{console.log(`${age} no`)}

// if (14<=age && age<=90){
//     console.log(`your age is ${age} ok`);
// }else{console.log(`${age} no`)}

// (14<=age && age<=90) ?  console.log(`your age is ${age} ok`) : console.log(`${age} no`)
//==============================

//Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
//Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
//  let age = prompt('enter age','');
//!(14<age && age<90) ?  console.log(`your age is ${age} `) : console.log(`age from 14 to 90 :${age}`);
// (14<age<90) ?  console.log(`your age is ${age} `) : console.log(`age from 14 to 90 :${age}`);
// (14>age || age>90) ?  console.log(`your age is ${age} `) : console.log(`age from 14 to 90 :${age}`);

//===================================
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
//Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let question1 = prompt('who are you?','');
//  if (question1=='admin'){
//      let question2 = prompt('password','');
//      if( question2=='1111'){console.log('hello')}
//      else if (question2 == '' || question2==null) {console.log('не введений пароль')}
//      else{console.log('wrong password')}
//  }
// else if(question1 == null || question1=='') {console.log('не введена персона')}
// else console.log('wrong person');

//=====================================
// Напишите if..else, соответствующий следующему switch:

    // switch (browser) {
    //     case 'Edge':
    //         alert( "You've got the Edge!" );
    //         break;
    //
    //     case 'Chrome':
    //     case 'Firefox':
    //     case 'Safari':
    //     case 'Opera':
    //         alert( 'Okay we support these browsers too' );
    //         break;
    //
    //     default:
    //         alert( 'We hope that this page looks ok!' );
    // }

// let brouser = prompt('Enter brouser:','');
// if( brouser =='Edge' ){console.log( "You've got the Edge!" )}
// else if(brouser=='Chrome' || brouser=='Firefox'){
//     console.log( 'Okay we support these browsers too' );
// }else console.log( 'We hope that this page looks ok!' );
//==========================================================
// Перепишите код с использованием одной конструкции switch:

    // let number1 = +prompt('Введите число между 0 и 3', '');
    // if (number1 === 0) {
    //     alert('Вы ввели число 0');
    // }
    // if (number1 === 1) {
    //     alert('Вы ввели число 1');
    // }
    // if (number1 === 2 || number1 === 3) {
    //     alert('Вы ввели число 2, а может и 3');
    // }

// switch (number1) {
//     case 0:alert('Вы ввели число 0'); break;
//     case 1: alert('Вы ввели число 1');break;
//     case 2:
//     case 3: alert('Вы ввели число 2, а может и 3');break;
//     default:alert('I dont know');
// }

