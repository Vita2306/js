// console.log("hello");
//логіка лічильника

//заходим в дів,де лежить спан в якому відображ лічильник
let counterEl = document.querySelector('.counter-js');
//заходим в спан , де відображ значення лічильника
let countValueEl = document.querySelector('.value-counter-js');
//віщаєм слухача на клік на дів
counterEl.addEventListener('click',()=>{
    // console.log('click');
    //берем значення з спана яке там є
    let currentValue = countValueEl.innerHTML;
    // console.log(currentValue);
    //при кліку збільшуєм не 1
    currentValue++;
    //записуєм значення в спан
    countValueEl.innerHTML = currentValue;
    //зберігаєм значення в локалсторедж
    localStorage.setItem('counter-value',currentValue);

});
//виводим значення з локалСторедж в спан, де має бути показано збережене значення
let savedCounterValue = localStorage.getItem('counter-value');
//показуєм збережене наклікане значення з локалстореджа після перезагрузки
//іф нам треба ,якщо буде 0 то щоб його показувало в спані,бо іначе буде пусто
if (!!savedCounterValue){
    countValueEl.innerHTML = savedCounterValue;
}


