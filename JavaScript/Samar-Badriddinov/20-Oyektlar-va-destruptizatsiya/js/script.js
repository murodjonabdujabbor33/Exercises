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



// object ichiga o'zimiz metod qo'shishimiz mumkin.

const car = {
  brand: "GM",
  model: "Malibu2",
  price: 30000,

  getPrice: function() {
    console.log(`${car.brand} ${car.model}. Narhi: ${car.price}`);
  }
};
// car.getPrice();


// destruptizatsiya (destructuring) -> object ichidagi ma'lumotni tortib olish.
// 1-usuli oddiy usuldagi olish:
const theifHair = theif.color.hair;
const theifHairStyle = theif.color.style;
// console.log(theifHair); console.log(theifHairStyle);

// 2-usuli (destruptizatsiya): bunda keylar nomi bir xil bo'lishi shart
// const {hair} = theif.color;
// console.log(hair);
// const {hair, style} = theif.color;
// console.log(hair, style);

const {model, brand, price} = car;
// console.log(model); console.log(brand); console.log(price);
