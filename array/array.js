// let arr = [];
// arr.push('linda' +
//     'finda' +
//     'tinda');
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//     Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//     P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumPrompt() {
//     let numberPrompt =[];
//     while(true){
//         let prompt1 = prompt('Enter number:',0);
//         if( prompt1 === null || prompt1 === ''||!isFinite(prompt1)) break;
//         numberPrompt.push(+prompt1);
//     }
//     let sum = 0;
//     for (let key of numberPrompt){
//         sum += key;
//     }
//     return sum;
// }
//
// console.log( sumPrompt() );

//з масиву вибрати додатні і вивести суму їх, аля якщо є число більше то вивести його

// let atr = [100, -9, 2, -3, 5];//100
// function sumPlus(art) {
//     let sumPlus=0;
//     let sumMax= 0;
//
//     for (let key of art){
//         sumPlus+= key;
//         if(sumPlus<0) sumPlus=0;
//         sumMax = Math.max(sumPlus,sumMax);
//     }
//     return sumMax;
// }
// console.log(sumPlus(atr));

// let arr2 = [1,2,3,4,5,6,7];
// console.log(arr2.indexOf(0));
//-1=> такого значення немає,поверне -1
// console.log(arr2.includes(3));
// якщо є поверне true, no-false;

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
// ];
// let findUser = users.find(item=>item.name=='Маша');
// console.log(findUser.id);
//
// let filterUsers = users.filter(item => item.id < 3);
// console.log(filterUsers);
//
// let mapArr = ['Yes','No','Ok'].map(item=>item);
// console.log(mapArr);
//
// let sortArr = mapArr.sort();
// console.log(sortArr);
//
//
// let numSort = [1,4,3,5,6,7,3,5,7,5,3];
// function sortNum(a,b){
//     if (a>b) return 1;
//     if (a==b) return 0;
//     if (b>a) return -1;
// }
//
// let sortNumb = numSort.sort(sortNum);
// console.log(sortNumb);

// зробити з строки масив

// function checkNames() {
//     let arrName;
//     let checkName = [];
//     while(true){
//         let promptEnter = prompt('Enter name: ','');
//         if(promptEnter == null || promptEnter ===''||isFinite(promptEnter) )break;
//         checkName.push(promptEnter);
//     }
//     return checkName;
// }
// console.log(checkNames());

// from string to array
// let stringForArr = 'qw,qw,er,qw,re,wq,tu';
// let arrFromString = stringForArr.split(',');
// console.log(arrFromString);

//from array to string
// let arrForString =  arrFromString.join(',');
// console.log(arrForString);
// arrFromString.forEach(console.log);

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
// function yu(string1){
//     return string1
//         .split('-')
//         .map((word,index) =>
//         index == 0 ? word : word[0].toLocaleUpperCase()+ word.slice(1))
//         .join('');
// }
// console.log(yu('list-style'));
//
// function camelize(str) {
//     return str
//         .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//         .map(
//             // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//             // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }
//
// console.log(camelize('list-style'));

// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и
// отдаёт массив этих элементов.
//     Функция должна возвращать новый массив и не изменять исходный.
//     Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// function searchQ(arr, a, b) {
//     return arr.filter(item => (a <= item && b >= item))
// }
// console.log(searchQ([5,6,8,3,1],1,4));


// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//     Функция должна изменять принимаемый массив и ничего не возвращать.
//     Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// function getArr(arr, a, b) {
//
//     for ( let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         if (val < a || val > b) {
//             arr.splice(i,1);
//             i--;
//         }
//     }
//     return arr;
// }
// let arre = [1,7,8,4,5,2,3,4,8];
// // console.log(getArr(arre,1,5));
// getArr(arre, 1, 5);
// console.log(arre);

// Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
// alert( arr ); // 8, 5, 2, 1, -10
// console.log(arr.sort((a,b)=> b-a));

// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//     Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// let arr = ["HTML", "JavaScript", "CSS"];
// function sortF(arr){
//     return arr
//         .slice()
//         .sort()
// }
//
// console.log(sortF(arr));
// console.log(arr);









