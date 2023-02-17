"use strict";

// const channel = prompt("What's your favourite youtuber");
// console.log("https://youtube.com/" + channel);


// interpalatsiya
// console.log(`https://youtube.com/${channel}`);



const clientName = "Murodjon";
const lastname = "Abdujabbor";

console.log(`My first name is ${name}, my last is ${lastname}`);


// JavaScript-da interpolatsiya shunga o'xshash tarzda ishlaydi. Satrda $ {...} konstruktsiyasi yaratilgan bo'lib, uning ichiga istalgan o'zgaruvchini yoki ifodani joylashtirish mumkin:

// interpolatsiya
var age = 25;
console.log(`Men ${age} yoshdaman`);

// interpolatsiya emas
var yosh = 24;
console.log ('Men', yosh, 'yoshdaman');

// Interpolatsiyadan foydalanib, har qanday ifodaning natijasini qatorga qo'yishingiz mumkin, masalan, funktsiyani ham
const up = (str) => str.toUpperCase();
const strUp = `bu katta harf bilan ${up('string')}`;
console.log(strUp);


const sum = (... args) => `Sum ${args.reduce ((start, arg) => start + arg, 0)} ga teng`;
console.log(sum (12, 23, 32)); // Sum 67 ga teng


// ichki interpolatsiya
const up1 = (str) => str.toUpperCase();
const userName = "foydalanuvchi";
const strUP1 = `bu ${up1 (`"${userName}"`)}lar ajoyib`;
console.log (strUP1); // bu FOYDALANuvchilar zo'r


// eski usulda yozilishi
var up2 = (str) => str.toUpperCase ();
var user = 'user';
var str = 'these ' + up2(user + 's') + ' best';
console.log (str); // bu FOYDALANuvchilar zo'r