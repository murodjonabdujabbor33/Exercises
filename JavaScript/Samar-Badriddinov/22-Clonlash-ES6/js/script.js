"use strict";

// let -> mutable object
// const -> immutable object

// Clonlash (nusxa olish)

// veriable larni clonlash
let x = 10;
let y = x;

y = y + 10;
// console.log(x); console.log(y);


// boolean clonlash
let isMerried = false;
let isMale = !isMerried;

// console.log(isMerried); console.log(isMale);


// object ni clonlash
// objectni clonlash veriables kabi ishlamaydi.
// object dan nusxa olish uchun, alohida function yaratiladi. Lekin tayyor function lar ham bor.

// objectni oddiy clonlash (deep emas) fuction yaratish orqali:
function copyObj(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

const numbers = {
  x: 10,
  y: 5,
};

const newNumbers = copyObj(numbers);
newNumbers.x = 15;

// console.log(newNumbers);
// console.log(numbers);



// objectni Object.assign() function orqali clonlash:
const numbers1 = {
  x: 20,
  y: 30,
};

const newNumbers2 = Object.assign({}, numbers1);
newNumbers2.x = 25;

// console.log(numbers1);
// console.log(newNumbers2);



// bir nechta objectni bir biriga qo'shish:
const savat1 = {
  mevalar: ['olma', 'anor'],
};
const savat2 = {
  sabzavotlar: ['karam', "shalg'am"],
};
const savat3 = {
  shirinliklar: ['Alpengold', 'Sinikers'],
};

const savatlar = Object.assign(savat1, savat2, savat3);
// console.log(savatlar);



// MASSIVLARDAN NUSXA OLISH:

// funtion yaratish orqali
function arrCopy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // newArr[i] = arr[i];
    newArr.push(arr[i]);
  }
  return newArr;
}

const arr = ['Malibu2', "Cobalt", "Nexia"];
const cars = arrCopy(arr);
cars.push("Gentra");

// console.log(arr);
// console.log(cars);


// slice() metodi orqali:
const arr2 = [1, 2, 3, 4];
const numbers2 = arr2.slice();
numbers2.push(5);

// console.log(arr2);
// console.log(numbers2);


const arr3 = ['olma', 'nok', 'uzum', 'shaftoli', 'banan'];
const mevalar = arr3.slice(1, 4);

// console.log(arr3);
// console.log(mevalar);



// spread metodi orqali bir nechta massivni bitta massivga solish:
const Liverpool = ['Salah', 'Mane'];
const RealMadrid = ['Benzema'];

const mixPlayers = [...Liverpool, ...RealMadrid];
// console.log(mixPlayers);


// spread yordamida object dan nusxa olish
const Fruits = {
  type: "golden",
  height: 1000000,
};
const Fruits2 = {...Fruits};

Fruits2.height = 100;

// console.log(Fruits);
// console.log(Fruits2);
