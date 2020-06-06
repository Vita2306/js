//json
// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };
//
// let jsonString = JSON.stringify(student);
// console.log(typeof jsonString);
// console.log(jsonString);

// for (let [key,value] of Object.entries(student)){
//     console.log(key,value)
// }
// let dateNow = new Date();
// console.log(dateNow);

//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// let toJson = JSON.stringify(user);
// console.log(toJson);
//
// let fromJSON = JSON.parse(toJson);
// console.log(fromJSON);

// забрати ключ з непотрібним значенням наприклад place
// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup ссылается на room
// };
// room.task = meetup;
// console.log(room);
// let toJsonReplase = JSON.stringify(meetup,function (key,value) {
//     return key == 'place' ? undefined : value;
// },2);
// console.log(toJsonReplase);

// перевести JSON в обєкт
// let fromJSONToObj = JSON.parse(toJsonReplase);
// console.log(fromJSONToObj);
//
// // add Date() до oб'єкта
// fromJSONToObj.date = new Date();
// console.log(fromJSONToObj);

//вивести певне значення об'єкта Date() після парсу

// let parseDateObj = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     date: new Date()
// };

// let parseDateJson = JSON.stringify(parseDateObj);
//
// let withNeedDate = JSON.parse(parseDateJson,function (key,value) {
//   return key == 'date'? new Date(value) : value;
// });
//
// console.log(withNeedDate.date.getDate());

// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
//     Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
//     Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
    number: 23,
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

let needValues = JSON.stringify(meetup,function (key,value) {
     return key !=='' && value == meetup ? undefined : value;
});
console.log(needValues);


