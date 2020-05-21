// let a= "hello";
// function change_a(){
//     a='goodbye';
// }
// console.log(`let a=${a}`);
// change_a();
// console.log(`let a=${a} arter`);
//
// function changeName(age){
//     if(age>=18){
//         return true;
//     }else return console.log('no-no!');
// }
// let age = +prompt('Your age is:','');
// if(changeName(age)){
//     console.log("ok!");
// }else console.log('you should study');
//==============================
//вивести простi числa
// function showPrimes(n) {
//
//     for (let i = 2; i < n; i++) {
//         if (isPrime(i)) continue;
//
//         console.log(i);  // простое
//     }
// }
//
// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if ( n % i == 0) return false ;
//     }
//     return true;
// }
//
// let n=10;
// showPrimes(n);
//====================================
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.

//     function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//
//     Сделайте два варианта функции checkAge:
//
//     1.Используя оператор ?
//     2.Используя оператор ||

// let age = +prompt('age is:','');
// function checkAge(age) {
//     return age > 18 ?  true : confirm('Родители разрешили?');
// }
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
// checkAge(age);

//==============================================
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//     function minNumber(a,b) {
//
//          // if (a>b) {console.log(b)}
//          // else console.log(a)
//
//         a<b ? console.log(a) : console.log(b)
//     }
//     let a = +prompt('enter first:','');
//     let b = +prompt('enter second:','');
//     minNumber(a,b);

//=======================================
//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
//P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
// function powNum(a,b) {
//     console.log(a**b);
// }
//     let a = +prompt('enter number:','');
//     let b = +prompt('enter pow:','');
//     b<0 ? console.log(`0>${b}`) : powNum(a,b);
