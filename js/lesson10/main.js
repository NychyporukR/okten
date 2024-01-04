
<!-- Створити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом-->

let users = [];
let form = document.forms[0];
form.onsubmit = function (ev) {
    ev.preventDefault();
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;
    users.push({name, surname, age})
}

let result = document.getElementById("allInside");
result.onclick = function(e) {
    for (const user of users) {
        let div = document.createElement("div");
        div.innerText = `user : name - ${user.name}, surname - ${user.surname}, age - ${user.age} `;
        document.body.append(div);
    }
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber = parseInt(localStorage.getItem('number')) || 0;

let box = document.createElement('div');
document.body.append(box);
box.style.background = 'orange';
box.textContent = currentNumber;

currentNumber += 1;
localStorage.setItem('number', currentNumber);

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

const now = new Date();
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(now);
localStorage.setItem('sessions', JSON.stringify(sessions));


// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let prev = document.getElementById('prev');
let next = document.getElementById('next');


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let zavd = document.createElement('div');
zavd.id = 'text';
let firstL = document.createElement('h2');
let secondL = document.createElement('h4');
firstL.innerText = 'some';
secondL.innerText = 'text';
zavd.append(firstL, secondL);
document.body.append(zavd);

let button = document.createElement('button')
button.innerText = 'backspace';
document.body.append(button);

button.onclick = function () {
        firstL.style.display = 'none';
        secondL.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

