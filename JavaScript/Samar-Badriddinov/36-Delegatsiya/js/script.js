"use strict";

// qaysi element bosilsa, u haqidagi block ma'lumotlar chiqadi.
// const wrapper = document.querySelector('.btn-block');
// wrapper.addEventListener('click', (event) => {
//   console.dir(event.target);
// });




// faqatgina knopkani bosgandagina ma'lumot chiqarish:
// const wrapper = document.querySelector('.btn-block');
// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.TagName === 'BUTTON') {
//     console.log('btn click');
//   }
// });





// biror classni bosgandagina ishlashi:
// const wrapper = document.querySelector('.btn-block');
// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.classList.contains('blue')) {
//     console.log('btn click');
//   }
// });





// delegatsiyaning muhimligiga sabab:
// btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log('clicked');
//   });
// });
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);







// delegatsiya -> ona elementdan turib bola elementga qandadir xodisa qo'shishimiz mumkin.

// const wrapper = document.querySelector('.btn-block'),
//   btns = document.querySelectorAll('button');

// btns[0].addEventListener('click', () => {
//   btns[1].classList.toggle('red');
// });
// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.classList.contains('red')) {
//     console.log('btn click');
//   }
// });
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);



const wrapper = document.querySelector('.btn-block'),
  btns = document.querySelectorAll('button');

btns[0].addEventListener('click', () => {
  btns[1].classList.toggle('red');
});
wrapper.addEventListener("click", (event) => {
  if (event.target && event.target.matches('button.red')) {
    console.log('btn click');
  }
});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);