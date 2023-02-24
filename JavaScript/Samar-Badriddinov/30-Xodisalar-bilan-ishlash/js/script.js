"use strict";

// hodisa berishning 3 xil yo'li bor:

// 1-usuli: (onclick)
// tag ichida onclick="alert('Juda Eski')"
// bu juda eski usul

// 2-usuli: (bu ham sal eskiroq)
// 1-minus tarafi: ishga tushgan hodisani o'chirib tashlay olmaymiz.
// 2-minus tarafi: bilmasdan 2 va undan ko'p funksiya yozib yuborilsa, bizga oxirgi funksiyani bajarib beradi.
const btn2 = document.querySelector('#btn2');
btn2.onclick = function() {
  alert('Sal Eskiroq');
};

// 3-usuli: (addEventListener()):
// plus tarafi, undagi har bir funksiya birma-bir ishlab chiqadi.
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('Yangi');
});

// btn3.addEventListener('click', () => {
//   alert('Yangi 2');
// });


// Har bir hodisada hodisaning detallar mavjud:
btn2.addEventListener('mouseenter', (event) => {
  // event.target.remove();
  // console.log(event.target);
  // alert('Hover');
});


// elementni o'chirib tashlash:
const deleteElement = (event) => {

  event.target.remove();
};

// btn2.addEventListener('click', deleteElement);
// btn2.removeEventListener('click', deleteElement);


// element qo'shish:
let i = 0;
const addElement = (event) => {
  i++;
  if (i === 3) {
    btn2.removeEventListener('click', addElement);
  }
  console.log(i);
};

btn2.addEventListener('click', addElement);



// bola elementno bossak ona element ham bosilishi:
const overlay = document.querySelector('.overlay');
const cb = (event) => {
  console.log(event.currentTarget);
};

btn3.addEventListener('Yangi', cb);
overlay.addEventListener('Yangi', cb);



// veb saytning o'zini oddiy holatini o'zgartirish:
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();
  alert("Link");
});