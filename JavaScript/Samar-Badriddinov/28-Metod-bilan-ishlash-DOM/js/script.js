"use strict";
const box = document.querySelector('#box');
const buttons = document.querySelectorAll('button');
const circles = document.querySelectorAll('.circle');
const hearts = document.querySelectorAll('.heart');
console.dir(box);

// tanlab olingan elementning stilini o'zgartirish:
box.style.backgroundColor = "red";
box.style.height = "100px";
box.style.width = "100px";

buttons[0].style.width = '200px';
circles[1].style.backgroundColor = 'yellow';


// elementga bir qatorda birdaniga bir nechta stillar berish:
box.style.cssText = "background-color: orange; width: 50px; height: 100px";


// massivdagi elementlarning barchasiga bittada still berish:

// 1-usul (for):
for(let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'green';
}

// 2-usul (forEach()):
hearts.forEach(item => {
  item.style.backgroundColor = 'gray';
});


// HTML hujjatga element qo'shish:

// HTML body qismiga qo'shish:
const btn = document.createElement('button');
// const text = document.createTextNode('I am a text');
document.body.append(btn);


// HTML ichidagi circle__wrapper degan class ichidagi circle class iga qo'shish
const circleWrapper = document.querySelector('.circle__wrapper');
const myCircle = document.createElement('div');
// elementga cllass qo'shish
// myCircle.classList.add('circle');
// circleWrapper.append(myCircle);
// circleWrapper.before(myCircle);
// circleWrapper.after(myCircle);
// circles[0].after(myCircle);

// element ni o'chirish
// circles[1].remove();

// elementning o'rniga boshqa elementni qo'yish:
// circles[1].replaceWith(myCircle);

// innerHTML -> element ichiga matn va HTML kodlar qo'shish uchun:
//textContent -> faqat textlar uchun ishlaydi:
// circleWrapper.append(myCircle);
// myCircle.innerHTML = '<pre>E</pre>';
myCircle.textContent = 'E'; // userdan input olishda foydali bo'lishi mumkin.


// biror class nomidagi element atrofiga element qo'shish:

// shu class nomidagi element ichining boshiga boshiga qo'shish:
circleWrapper.insertAdjacentHTML("afterbegin", "<pre>E</pre>");

// shu class nomidagi element ichining oxiriga qo'shish:
circleWrapper.insertAdjacentHTML("beforeend", "<pre>F</pre>");

// shu class nomidagi elementni yuqorisiga element qo'yish:
circleWrapper.insertAdjacentHTML("beforebegin", "<pre>G</pre>");

// shu class nomidagi elementni pastiga element qo'yish:
circleWrapper.insertAdjacentHTML("afterend", "<pre>H</pre>");
