// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectagle = (a, b) => console.log('Площа прямокутника : ' +  (a*b));
rectagle(3,5);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circle = (r) => console.log('Площа кола : ' + (2*Math.PI*r));
circle(5);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (h, r) => console.log('Площа циліндра : ' + (2*Math.PI*r*h + 2*Math.PI*Math.pow(r,2)));
cylinder(3,5)

// - створити функцію яка приймає масив та виводить кожен його елемент


let arrayOutput = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
arrayOutput(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let pWrite = (text) =>  document.write(`<p> ${text} </p>`);
pWrite('Write your essay');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let elements = (text) => document.write
    (`    
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
    `)

elements('weather forecast');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let elementsUp = (text, y) =>{
    document.write('<ul>');
        for (let i = 0; i < y; i++) {
            document.write(`<li>${text}</li>`);
        }
    document.write('</ul>');
}
elementsUp('forecast', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let keeper = (array) => {
    document.write('<ul>');
    for (const arrayKey in array) {
        document.write(`<li>${array[arrayKey]}</li>`);
    }
    document.write('</ul>');
}
const arr = [25,'string', true, 'second string', 1];
keeper(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let keeperSecond = (array) => {
    for (const arrayKey in array) {
        document.write(`<div>${array[arrayKey]}</div>`);
    }
}
const arra = [11,'Roman', 19, 12, 'John', 21];
keeperSecond(arra);

// - створити функцію яка повертає найменше число з масиву

let min = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
const min_number = [22, 54, 98, 63, 55, 24, 4, 64];
let result = min(min_number);
console.log(min);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }
    return sum1;
}
const numbers = [22, 54, 98, 63, 55, 24, 4, 64];
let result2 = sum(numbers);
console.log('Sum = ' + result2);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}
let swapNumbers = [54, 52, 22, 6];
console.log(swap(swapNumbers, 0, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let value = 0;

    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            value = currencyValues[i].value;
        }
    }

    const result = sumUAH / value;
    console.log(result);
}
exchange(5000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR');