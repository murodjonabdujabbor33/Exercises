"use strict";

// HTML HUJJATDAN ELEMENT OLISHNING ESKI YO'LLARI

// HTML hujjatdan elementni ID si orqali olish:
const box = document.getElementById('box');
// console.log(box);

// elementni tag nomi orqali olish:
// bunda bizga massiv qaytadi. Garchi element 1 ta bo'lsa ham. Ularga [1] kabi index orqali murojaat qilamiz. U bizga HTMLCollection qaytaradi. Uning ichida forEach() method i yo'q.
const buttons = document.getElementsByTagName('button');
// console.log(buttons);


// elementni class nomi orqali olish:
// bunda bizga massiv qaytadi. Garchi element 1 ta bo'lsa ham. Ularga [1] kabi index orqali murojaat qilamiz. U bizga HTMLCollection qaytaradi. Uning ichida forEach() method i yo'q.
const circles = document.getElementsByClassName('circle');
// console.log(circles);



// YANGI YO'LLARI

// querySelector() orqali olish, bu bizga faqatgina 1 ta element qaytaradi. Biz unga qaysi selector ni qaytarishini aytishimiz kerak.
const hearts = document.querySelector('.heart');
// console.log(hearts);


// querySelectorAll() orqali olish, bu bizga barcha ko'rsatilgan elementlarni qaytaradi. Biz unga qaysi selector ni qaytarishini aytishimiz kerak. U bizga NodeList qaytaradi. Uning ichida forEach() methodi bor.
const hearts1 = document.querySelectorAll('.heart');
// console.log(hearts1);

// birorta class ning ichidan qidirish:
const wrapper = document.querySelector('.wrapper');
// console.log(wrapper);
const hearts2 = wrapper.querySelectorAll('.heart');
console.log(hearts2);

hearts2.forEach((item) => {
  console.log(item);
});