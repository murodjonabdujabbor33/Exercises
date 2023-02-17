"use strict";

// O'zgaruvchi yaratishning 1-usuli:

let number = 10; // o'zgartirish mumkin.
const myName = "Murodjon"; // Came Case usulidagi o'zgaruvchi
console.log(number);
number = 20;
console.log(number);

// const qiymatlarni object yaratish orqali o'zgartirish mumkin.
const person = {
  name: "Yusuf",
};

person.name = "Murodjon";
console.log(person);


// O'zgaruvchi yaratishning 2-usuli: (eski versiya)

var clientName = "Samar";
console.log(clientName);
clientName = "Murodjon";
console.log(clientName);

// var ishlatilmasligining sabablaridan bittasi agar biz o'zgaruvchini u yaratilishidan oldin e'lon qilib qo'ysak, xatolik o'rniga undefined chiqadi.

console.log(lastName);
var lastName = "Abdujabbor";


// "use strict" siz:
number = 12;
console.log(number);

// "use strict" bilan:
"use strict";
number = 23;
console.log(number);