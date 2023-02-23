"use strict";

// String

const x = 4;
console.log(typeof x); // number
const y = String(5);
console.log(typeof y); // string

// string + number = String
const z = 'Murodjon' + 10;
console.log(z);
console.log(typeof z);



// Number

let a = '7';
console.log(typeof a); // string
let b = Number('8');
console.log(typeof b); // number
console.log(typeof parseInt('12')); // number




// Boolean (!!)

// 0, "", undefined, NaN --> false;
let number = "23";
console.log(number);
console.log(Boolean(number));

console.log(typeof number);
console.log(typeof !!(number));
