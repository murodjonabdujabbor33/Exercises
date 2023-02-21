"use strict";

const theif = {
  jacket: "black",
  height: 1.7,
  color: {
    hair: "gray",
    style: "curley",
  }
};

// object elementlariga murojaat qilish
// console.log(theif.height);
// console.log(theif.color);
// console.log(theif.color.hair);

// object dan element o'chirib tashlash
// delete theif.jacket;
// console.log(theif);


// object ichidagi hamma kalit so'zlarini massivga olish. Object larda length xususiyati bo'lmaganligi uchun bu usul bizga object uzunligini topishga ham yordam beradi.

// object uzunligi 1-usuli:
// console.log(Object.keys(theif));
// console.log(Object.keys(theif).length);


// object uzunligi 2-usuli:
// let count = 0;
// for (let key in theif) {
//   count++;
// }
// console.log(count);


// object ni iteratsiya qilish
// for (let key in theif) {
//   if (typeof theif[key] === "object") {
//     for (let i in theif[key]) {
//       console.log(`Property ${i} has value ${theif[key][i]}`);
//     }
//   } else {
//     console.log(`Property ${key} has value ${theif[key]}`);
//   }
// }
