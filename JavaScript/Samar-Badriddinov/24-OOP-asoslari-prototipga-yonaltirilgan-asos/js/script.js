"use strict";

const firstName = "Murodjon";
const str = new String(firstName); // juda ham eski usul

// console.log(typeof firstName);
// console.log(typeof str);



// OOP


const car = {
  motor: 'X',
  color: 'red',
  isAirbag: true,
  isSpeed: function() {
    console.log(320);
  }
};

const gm = {
  isAirbag: false,
};

// objectdan meros olishning eski yo'li
// gm.__proto__ = car;
// console.log(gm.color);
// gm.isSpeed();


// object dan moros olishning yangi yo'li (setPrototypeOf)
Object.setPrototypeOf(gm, car);
// console.log(gm.color);
// gm.isSpeed();


// Object.create() orqali meros olish:
const bmw = Object.create(car);
// console.log(bmw.isAirbag);
// bmw.isSpeed();