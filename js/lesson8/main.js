// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = new User(i, 'Nick', 'Nickovuch', 'nick@gmail.com', 38066996423);
    console.log(array[i]);
}

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
 console.log(array.filter((user) => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(array.sort((a, b) => a.id - b.id));

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Clients {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.order = order;
    }
}

let array2 = [];
for (let i = 0; i < 10; i++) {
    if ( i % 2 === 0) {
        array2[i] = new Clients(i, 'Nick', 'Nickovuch', 'nick@gmail.com', 38066996423, ['burger, milk, salmon']);
    }
    else {
        array2[i] = new Clients(i, 'Nick', 'Nickovuch', 'nick@gmail.com', 38066996423, ['burger, salmon']);
    }
    console.log(array2[i]);
}

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
array2.sort((a, b) => a.order.length - b.order.length);
console.log(array2);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, dateOfRealise, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.dateOfRealise = dateOfRealise;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}

Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
};

Car.prototype.info = function () {
    console.log(`
        Модель авто: ${this.model},
        Виробник: ${this.producer},
        Рік випуску: ${this.dateOfRealise},
        Максимальна швидкість: ${this.maxSpeed},
        Об'єм двигуна: ${this.engineCapacity}
    `);
};

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = newSpeed;
    console.log(`Нова максимальна швидкість: ${newSpeed}`);
};

Car.prototype.changeYear = function (newValue) {
    this.dateOfRealise = newValue;
    console.log(`Нова дата випуску: ${newValue}`);
};

Car.prototype.addDriver = function (driver) {
    this.driver = driver;
    console.log('Водій доданий:', driver);
};

// Example usage:
const myCar = new Car('Toyota', 'Camry', 2013, 180, 2.0);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(250);
myCar.changeYear(2023);
myCar.addDriver({ name: 'John', licenseNumber: 'BC1234BC' });


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Popelushka(name, age, feet) {
    this.name = name;
    this.age = age;
    this.feet = feet;
}
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let arr = [new Popelushka('Nastia', 18, 38),
                        new Popelushka('Kristina', 22, 36),
                        new Popelushka('Olya', 16, 36),
                        new Popelushka('Marta', 25, 37),
                        new Popelushka('Polina', 20, 39)];

let prince = new Prince('Roman', 19, 38)
let foundedPop;

for(let i = 0; i < arr.length; i++) {
    if(prince.shoe === arr[i].feet) {
    foundedPop = arr[i];
    console.log(`Popelushka ${foundedPop.name} should be with Prince ${prince.name}`)
    break;
    }
}

let foundedPop2 = arr.find(arr => arr.feet === prince.shoe);
console.log(`Popelushka ${foundedPop2.name} should be with Prince ${prince.name}`);
