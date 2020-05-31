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

// let id = Symbol('id');
// let obj1 = {
//     name:'Vita'
// };
// obj1[id]='hello';
// console.log(obj1);
//
// let objN ={};
// for(let key in obj1){
//     objN[key]= obj1[key];
// }
//
// console.log(objN);

//Создайте объект calculator (калькулятор) с тремя методами:

//read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//sum() (суммировать) возвращает сумму сохранённых значений.
//mul() (умножить) перемножает сохранённые значения и возвращает результат.
    //let calculator = {
    // ... ваш код ...
//};
//calculator.read();
//alert( calculator.sum() );
//alert( calculator.mul() );

//     let objNum ={
//         read:function () {
//             this.a = +prompt('enter a:','');
//             this.b = +prompt('enter b:','');
//         },
//         sum:function () {
//            return this.a + this.b;
//         },
//         mul:function () {
//             return this.a * this.b;
//         }
//     };
//
// objNum.read();
// console.log(objNum.sum());
// console.log(objNum.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log( this.step );
//         return this;
//     }
// }
//
// ladder.up().up().down().up().down().showStep();

// var foo = {
//     toString: function() {
//         return 'foo';
//     },
//     valueOf: function() {
//         return 2;
//     }
// };
//
// console.log( foo );
// console.log( foo );
// console.log( foo + "3" );

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств.
    //Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Calcul()  {
//
//         this.read = function() {
//             this.a = 2;
//             this.b = 3;
//         };
//         this.sum= function () {
//            return this.a + this.b;
//         };
//         this.mul= function () {
//             return this.a * this.b;
//         };
// }
//
// let calc = new Calcul();
// calc.read();
// console.log(calc.sum());
// console.log(calc.mul());

// Напишите функцию-конструктор Accumulator(startingValue).

//     Объект, который она создаёт, должен уметь следующее:

//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() использует prompt для получения числа и прибавляет его к свойству value.
//     Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

//     Ниже вы можете посмотреть работу кода:

//     let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// function  Accumulator(startingValue) {
//
//         this.value = startingValue;
//         this.read= function () {
//             this.value += +prompt('enter number:','');
//         };
// }
//
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);



