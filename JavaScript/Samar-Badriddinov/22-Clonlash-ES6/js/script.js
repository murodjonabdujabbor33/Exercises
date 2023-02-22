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
function copyObj (obj) {
  let objCopy = {};
  for (let key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
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
console.log(savatlar);
