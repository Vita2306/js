// let newMap = new Map();
//
// newMap.set(1,'a');
// newMap.set(2,'b');
// newMap.set(3,'c');
// console.log(newMap.size);//3
// console.log(newMap.get(2));//b
// console.log(newMap.has(3));//true
// newMap.clear();//clear Map
// console.log(newMap);
//
// let odj1 ={
//     "1":"hello"
// };
//
// newMap.set(odj1,78);//key:obj value:78
// newMap.set(4,56);
// newMap.set('n','no');
//
// console.log(newMap);
//
// for(let key of newMap.keys()){
//     console.log(`key is:${key}`);
// }
//
// for(let value of newMap.values()){
//     console.log(`value is:${value}`)
// }
//
// newMap.forEach((value,key,map) => {console.log(`key:${key}-value:${value}`)});
//
// let objMap = {
//     '1':'q',
//     '2':'e',
//     '4':'i'
// };
//
// let mapFromObj = new Map(Object.entries(objMap));
// console.log(mapFromObj);
//
// let objFromMap = Object.fromEntries(mapFromObj);
// console.log(objFromMap);



// Фильтрация уникальных элементов массива
// Допустим, у нас есть массив arr.Создайте функцию unique(arr),
//     которая вернёт массив уникальных, не повторяющихся значений массива arr.
//
//     Например:

// function unique(arr) {
//         return Array.from(new Set(arr)) ;
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// console.log( unique(values) ); // Hare, Krishna, :-O

// Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//    Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

// function anagram(arr){
//   let map = new Map();
//   for(let word of arr){
//       let sortWord = word.toLowerCase().split('').sort().join('');
//       map.set(sortWord,word);
//   }
//   return Array.from(map.values());
// }
// anagram(arr);
// console.log(anagram(arr));

// let map = new Map();
//
// map.set("name", "John");
//
// let keys = Array.from(map.values());
//
// keys.push("more");
//
// console.log(keys); // name, more
//
// let user ={
//     "1":'nelli',
//     '2':'delli'
// };
// console.log(Object.keys(user));

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//     Напишите функцию sumSalaries(salaries),
//     которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//     Если объект salaries пуст, то результат должен быть 0.
// let salaries = {
//     "John": 890,
//     "Pete": 780,
//     "Mary": 560
// };
//
// function salary(obj) {
//     let sum=0;
//     for (let key of Object.values(obj)){
//           key===0 ? sum : sum += key;
//     }
//     return sum;
// }
// console.log(salary(salaries));

//Напишите функцию count(obj), которая возвращает количество свойств объекта:
//     let user = {
//         name: 'John',
//         age: 30
//     };
//
// function numbersItem(obj) {
//     let count = 0;
//     for(let key of Object.values(obj)){
//         key === null ? count : count++;
//     }
//     return count;
// }
// console.log(numbersItem(user));
//
// function  count(obj) {
//     return Object.values(obj).length;
// }
// console.log(count(user));



