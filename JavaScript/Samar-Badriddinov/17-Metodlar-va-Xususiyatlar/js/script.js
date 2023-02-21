"use strict";

// length - uzunlikni qaytaradigan metod
const userName = "Murodjon";
console.log(userName.length);

const arr = [1, 2, 3, 4];
console.log(arr.length);

// index orqali qiymat olish
const lastName = "Abdujabbor";
const arr2 = ['a', 'b', 'c', 'd'];
console.log(lastName[1]);
console.log(arr[2]);

// toUpperCase() -> matnni hamma harfini kattaga o'giradi.
// toLowerCase() -> matnni hamm harflari kichik ga aylanadi.

const street = "Alisher Navoiy";
console.log(street.toUpperCase());
console.log(street.toLowerCase());

// indexOf("") -> qidirilayotgan qiymat o'zgaruvchining nechanchi indexdaligini topish
const greeting = "Hello World";
console.log(greeting.indexOf("H"));

// slice(start, end) -> berilgan indexlar orasidagi ma'lumotni kesib beradi.
const text = "My name is Murodjon";
console.log(text.slice(11)); // manfiy qiymat oladi.
console.log(text.substring(0, 3)); // manfiy qiymat olmaydi.
console.log(text.substr(3, 4)); // 3-indexdan boshlab 4 uzunlikni kesish


// round() -> soni o'ziga yaqin eng butun songa yaxlitlaydi
const num = 8.6;
console.log(Math.round(num));


// parseInt() -> sonni faqat butun qismini olib beradi, matnlardan ajratgan holda.
const borderWidth = "16.3px";
console.log(parseInt(borderWidth));


// parseFloat() -> sonni butun va o'nlik qismlarini olib beradi, matnlarsiz.
const num2 = "13.3px";
console.log(parseFloat(num2));
