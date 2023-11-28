 // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui?</p></div>`);
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
     document.write(`<div><p>${i} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui?</p></div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while(i < 20) {
    document.write(`<h1>Lorem ipsum dolor sit amet.</h1>`);
    i++;
}

 // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let k = 0;
while(k < 20) {
     document.write(`<h1>Lorem ipsum dolor sit amet. ${k}</h1>`);
     k++;
}

 // - Використовуючи данні з масиву, за допомоги document.write та циклу
 // побудувати структуру по шаблону
 // Масив:
 //
 // let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

 let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
 document.write('<ul>');

 for (const item of listOfItems) {
     document.write(`<li>${item}</li>`);
 }

 document.write('</ul>');

 //  за допомоги циклу вивести:
 //  - користувачів зі статусом true
 //  - користувачів зі статусом false
 //  - користувачів які старші за 30 років

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
console.log(`true : `);
 for (let i = 0; i < users.length; i++) {
     if (users[i].status === true) {
         console.log(users[i].name);
     }
 }

 console.log(`false : `);
 for (let i = 0; i < users.length; i++) {
     if (users[i].status === false) {
         console.log(users[i].name);
     }
 }

 console.log(`age >= 30  : `);
 for (let i = 0; i < users.length; i++) {
     if (users[i].age >= 30) {
         console.log(users[i].name);
     }
 }