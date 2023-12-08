// - Знайти та вивести довжину настyпних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i] + ' = ' + str1[i].length);
}

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let str1_1 = [];
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i] + ' = ' + str1[i].toUpperCase());
    str1_1[i] = str1[i].toUpperCase();
}

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (let i = 0; i < str1_1.length; i++) {
    console.log(str1_1[i] + ' = ' + str1_1[i].toLowerCase());
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str2 = ' dirty string   ';
console.log(str2.split(' '));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2_2 = 'Ревуть воли як ясла повні';
function stringToarray(string) {
    console.log(string.split(' '));
}
stringToarray(str2_2);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const arr = [10,8,-7,55,987,-1011,0,1050,0];
const ArrayIntoString = arr.map(function (number) {
    return number.toString();
});
console.log(ArrayIntoString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
const numberSortAs = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
};

const numberSortDes = (a, b) => {
    if (a > b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
};

console.log(nums.sort(numberSortAs));
console.log(nums.sort(numberSortDes));

// - є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(coursesAndDurationArray);

let newArray = [];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration >= 5) {
        newArray.push(coursesAndDurationArray[i]);
    }
}
console.log(newArray);



