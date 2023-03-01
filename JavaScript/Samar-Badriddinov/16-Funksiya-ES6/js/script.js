"use strict";
// DECLORATION FUNCTION --> funksiyadan oldin ham uni ishlatishimiz mumkin. nomi bilan yartilgan funksiyalar.
// decloration - bayonot degani.
function sayHelloWorld() {
  console.log("Hello World!");
}
sayHelloWorld();


function speakUser(text) {
  console.log(text);
}
speakUser("Mening ismim Murodjon");




console.log(sumTwoNumbers(10, 10));
const SumNumber1andNumber2 = sumTwoNumbers(100, 100);
console.log(SumNumber1andNumber2);

function sumTwoNumbers(number1, number2) {
  return number1 + number2;
}




// EXPRESSION FUNCTION --> funksiya faqat o'zidan keyin ishlaydi.

const sayMyName = function() {
  console.log("Murodjon Abdujabbor");
};
sayMyName();



// ARROW FUNCTION --> O'zini shaxsiy context this i mavjud emas. Uning return i default bo'ladi. (strelkali funksiya). Bu qisqa sintaksisli funksiya e'lon qilish usuli ES6 (ECMAScript 2015)da qo'shilgan.

// 1-usuli
const calc = (a, b) => a + b;
console.log(calc(20, 20));

// 2-usuli
const sayInfo = (firstName, lastName) => {
  console.log(`Mening ismim ${firstName} ${lastName}`);
};
sayInfo("Murodjon", "Abdujabbor");


const returnAge = (age) => {
  return age;
};
let age1 = returnAge(24);
console.log(age1);
