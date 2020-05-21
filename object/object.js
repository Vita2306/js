// let object1 = {};
// object1.key1 = 'hello';
// console.log(object1);
//
// object1.key2 = 'World';
// console.log(object1);
//
// let hello = "how are you ?";
// object1[hello] = true;
// console.log(object1);
//
// // let fruit = prompt('how match fruit?','');
// let fruct = 'apple';
// let arr1 = {
//     [fruct]:5
// };
// console.log(arr1.apple);

// function oneQ(name,age){
//     return{
//         name,
//         age
//     }
// }
//
// let na = oneQ('Na',45);
// console.log(na.name);
//
// let summe ={
//     a:1,
//     b:3,
//     c:4
// };
// console.log(summe.a + summe.b + summe.c);
//
// for(let key in summe){
//     console.log(key);
// }

// let user = {};
// user.name = "Joun";
// user.name2 = 'Name2';
// console.log(user);
// user.name = 'name1';
// console.log(user);
// delete user.name;
// console.log(user);

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//     Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function chack(schedule){
//     let resultIs= "no key";
//
//     for(let key in schedule){
//         resultIs = 'key is ' + schedule[key]; // если тело цикла начнет выполняться - значит в объекте есть свойства
//     }
//     return resultIs;
// }
// console.log(chack(schedule));

//У нас есть объект, в котором хранятся зарплаты нашей команды:
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     };
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// function salaries1(salaries) {
//     let res=0;
//     for(let key in salaries){
//         res += salaries[key]; // если тело цикла начнет выполняться - значит в объекте есть свойства
//     }
//     return res;
// }
// console.log(salaries1(salaries));

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// до вызова функции
//     let ner = {
//         width: 100,
//         height: 200,
//         title: "My menu"
//     };

// multiplyNumeric(menu);

// после вызова функции
// ner = {
//     width: 200,
//     height: 400,
//     title: "My menu"
// };
//Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//P.S. Используйте typeof для проверки, что значение свойства числовое.

// function multiplyNumeric(numb){
//         for (let key in numb) {
//             if(typeof(numb[key])=='number')
//                 numb[key]*= 2;
//         }
//         return numb;
// }
// console.log(multiplyNumeric(ner));

