// arrays
//
// let arr = ['hello','world'];
//
// let [firstname,lastname] = arr;
// //те саме , як приклад нижче
// let first = arr[0];
// let second = arr[1];
//
// console.log(firstname,lastname);// hello world
// console.log(lastname);//world
//
// let [firstname1,lastname1,yu] = 'I say no'.split(' ');
//
// console.log(firstname1,lastname1);// I say
// console.log(lastname1,yu);//say no
// //якщо хочеш пропустити слово зроби як приклад нижче - постав між коми його
// let [firstName2, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(firstName2);//Julius
// console.log(title);//Consul
//
// let [a, b, c] = "abc";
// console.log(a,c);
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(two);
//
// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');
//
// console.log(user);
// console.log(user.name); // Ilya
//
// // цикл по ключам и значениям
// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`); // name:John, затем age:30
// }
//
// let user1 = new Map();
// user1.set("name", "John");
// user1.set("age", "30");
//
// for (let [key, value] of user1) {
//     console.log(`${key}:${value}`); // name:John, затем age:30
// }
//
// //зібрати залишкові дані в масив з масива -> поставити ... і дати назву-> ...назва
// let[name1,name2,...namesAll] = ['ol','il','til','fil','gil'];
//
// console.log(namesAll);//['til','fil','gil']
//
// // значения по умолчанию
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
//
// alert(name);    // Julius (из массива)
// alert(surname); // Anonymous (значение по умолчанию)
// // prompt запустится только для surname
// let [name3 = prompt('name?'), surname2 = prompt('surname?')] = ["Julius"];
//
// console.log(name3);    // Julius (из массива)
// console.log(surname2); // результат prompt

// let odjDa = {
//     name:'hello',
//     surname:'world'
// };
//отримання значень з обєкта по ключу
// let {name,surname} = odjDa;
// console.log(name,surname);
//зміна назви ключа
// let {name:n,surname:s} = odjDa;
// console.log(n,s);
//додавання елементів в новий обєкт
// let{ age=24 ,name , surname } = odjDa;
// console.log(age);
//наявне значення не переписує-> значення по ключу title не зміниться
// let options = {
//     title: "Menu"
// };
// let {width = prompt("width?"), title = prompt("title?")} = options;
//
// alert(title);  // Menu
// alert(width);  // (результат prompt)

let numb = {
    name: 'Ivan',
    surname: 'Ivanto',
    age: 34,
    car: 'opel'
};

// let{name,...item} = numb;
// console.log(item.age);//34
//  let {name,surname,title = 'hello'} = numb;
//  console.log(title);//hello

// У нас есть объект:
//     let user = {
//         name: "John",
//         years: 30
//     };
// Напишите деструктурирующее присваивание, которое:
//     свойство name присвоит в переменную name.
//     свойство years присвоит в переменную age.
//     свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// function ret({name,years:age,isAdmin=false}) {
//    console.log(`name :${name}\n age :${age}\n isAdmin :${isAdmin}`);
// }
// ret(user);

// У нас есть объект salaries с зарплатами:
//
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//     P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function maxSalary(obj) {
    let maxSalary = 0;
    let nameMaxSalary = null;
    for(let [key,value] of Object.entries(obj)){
        if (value > maxSalary) {
            maxSalary= value;
            nameMaxSalary = key;
        }
    }
    return nameMaxSalary;
}
console.log(maxSalary(salaries));







