// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [25, 50, 100, 22, 0, 5, 6, 99, 21, 10];
console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title: 'The art of thinking clearly',
    pageCount: 1,
    genre: 'self-help'
}

console.log(book);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookAuthors = {
    title: 'The art of thinking clearly',
    pageCount: 1,
    genre: 'self-help',
    authors : {
        name : ['Robert', 'Richard'],
        age : [57, 42]
    }
}

console.log(bookAuthors.authors.name[0]);
console.log(bookAuthors.authors.age[0]);
console.log(bookAuthors.authors.name[1]);
console.log(bookAuthors.authors.age[1]);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Roman', username: 'roman01', password: 'qwerty123'},
    {name: 'Igor', username: 'igor01', password: 'qwerty111'},
    {name: 'Nastia', username: 'nastia01', password: 'qwerty121'},
    {name: 'Leonid', username: 'leonid01', password: 'qwerty122'},
    {name: 'Nazar', username: 'nazar01', password: 'qwerty213'},
    {name: 'Maks', username: 'maks01', password: 'qwerty321'},
    {name: 'Solya', username: 'solya01', password: 'qwerty312'},
    {name: 'Taras', username: 'taras01', password: 'qwerty311'},
    {name: 'Ostap', username: 'ostap01', password: 'qwerty213'},
    {name: 'Viktoria', username: 'viktoria01', password: 'qwerty222'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

x = +prompt('Введіть число');
if (x != 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть значення від 0 до 59');
if (time >= 0) {
    switch (true) {
        case (time < 15) :
            console.log('Перша частина години');
            break;
        case (time < 30) :
            console.log('Друга частина години');
            break;
        case (time < 45) :
            console.log('Третя частина години');
            break;
        case (time < 60) :
            console.log('Четверта частина години');
            break;
    }
} else {
    console.log('Некоректне значення');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть значення від 0 до 31');
switch (true) {
    case (day < 10 && day > 0) :
        console.log('Перша половина місяця');
        break;
    case (day < 20 && day > 0) :
        console.log('Друга половина місяця');
        break;
    case (day <= 31 && day > 0) :
        console.log('Третя половина місяця');
        break;
    default:
        console.log('Некоректне значення');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday = +prompt('Enter the number of the week');
switch (weekday) {
    case '1' : console.log('Monday'); break;
    case '2' : console.log('Tuesday'); break;
    case '3' : console.log('Wednesday'); break;
    case '4' : console.log('Thursday'); break;
    case '5' : console.log('Friday'); break;
    case '6' : console.log('Saturday'); break;
    case '7' : console.log('Sunday'); break;
    default: console.log('Incorrect number!')
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = 5;
let b = 10;
if(a > b)
    console.log(a + ' Is bigger than ' + b);
else if ( a < b)
    console.log(a + ' Is smaller than ' + b);
else
    console.log(a + ' Is equal ' + b);

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// -


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for(let i = 0; i < 6; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5)
        console.log(coursesAndDurationArray[i].title + '- Cупер!');
}
