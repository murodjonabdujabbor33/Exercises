"use strict";

const btns = document.querySelectorAll("button");

// elementga nechta klass berilganligini bilish:
console.log(btns[0].classList); // DomTokenList()
console.log(btns[0].classList.length);


// element ichidiga klasslarga murojaat qilish:
console.log(btns[0].classList.item(2));


// elementdan class ni o'chirib tashlash:
btns[0].classList.remove('blue');


// elementga class qo'shish:
btns[1].classList.add('blue');


// toggle() -> elementda biz bermoqchi bo'lgan class bo'lsa, uni yo'q qiladi, yo'q bo'lsa, qo'shadi.
btns[1].classList.toggle('blue'); // borini o'chirish
btns[2].classList.toggle('blue'); // yo'giga qo'shish


// elementga birdaniga bir nechta klass qo'shish:
btns[6].classList.add('blue', 'some');


// contains() -> element ichida qaysidir class bor yo'qligini tekshirib beradi.
btns[0].classList.add('red');

if (btns[0].classList.contains('red')) {
  console.log('yeap');
}


// toggle() metodining qanday ishlash:
btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
});