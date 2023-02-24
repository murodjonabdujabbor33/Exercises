"use strict";

// console.log(document.head);
// console.log(document.body);

// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// parentNode berilgan elementdan oldingi elementni tanlab oladi.
// console.log(document.querySelector('#btn3').parentNode.parentNode);


// data-current=" " -> biror elementga qiymat berish uchun ishlatiladi.
// console.log(document.querySelector('[data-current="b"]'));

// nextSibling parentElement -> elementdan keyingi elementni olish uchun ishlatiladi.
// console.log(document.querySelector('[data-current="b"]').nextSibling);


// previousSibling va nextElementSibling -> elementdan oldingi elementni olish uchun ishlatiladi.
// console.log(document.querySelector('[data-current="b"]').nextElementSibling);


// nodes ning ichdan kerakli elementlarni topish:
console.log(document.body.childNodes);

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
}