"use strict";


// pop() metodi massivning oxirgi elementini sug'urib oladi.
const arr = [1, 2, 3, 4, 5, 6];
arr.pop();
// console.log(arr);


// push() metodi massivning oxiriga elementlar qo'shadi.
const arr2 = [10, 20];
arr2.push(30, 40);
// console.log(arr2);


// shift() metodi massivning boshidagi elementini o'chiradi. Bunda, massiv elementlari qaytatdan tartiblanadi. Bu esa tavsiya qilinmaydi.
const arr3 = [1,2,3,4,5];
arr3.shift();
// console.log(arr3);


// unshift() metodi massivning boshiga elementlar qo'shadi. Bunda, barcha massiv elementlarining indexi o'zgaradi. Bu esa tavsiya etilmaydi.
const arr4 = [3,4];
arr4.unshift(1,2);
// console.log(arr4);


// for i bilan massiv elemenlarini iteratsiya qilish.
// lekin for i bilan odatda object larni iteratsiya qilinadi.
const mevalar = ["olma", "anor", "anjir", "o'rik", "tarvuz"];
for (let i = 0; i < mevalar.length; i++) {
  // console.log(mevalar[i]);
}

// for of bilan massivlarni iteratsiya qilish.
// odatda massivlarni for of bilan iteratisiya qilinadi.
const cars = ["Malibu", "Lacetti", "Cobalt", "Nexia"];
for (let car of cars) {
  // console.log(car);
}


// length ning ishlash: u massivning elementlarining oxirgisining indexsini aniqlab unga birni qo'shadi. agar massivimizda 10 ta element bo'lsayu biz unga 100 index bilan birorta qiymat qo'shsak, massivimizda 6 ta element bo'lsa ham bizga 101 ta element bor deydi. Oradagi bo'sh joylarda empty item degan narsa bor deydi.
const arr5 = [1,2,3,4,5];
arr5[100] = 9;
// console.log(arr5.length); // mana ahvol



// eng ommabop iteratsiya qilish usuli:
// forEach ning qulayligi har bir element uchun forEachdagi callback function ishlaydi.
// for of ning qulayligi esa if va break lar bilan ishlash osonligida.
const arr6 = [1, 2, 3, 4, 5];
arr6.forEach(function(item, index, arr6) {
  // console.log(`${index}: ${item} into in ${arr6}`);
});


// split() matnlar bilan ishlaydi, elementlarni berilgan ajratuvchi bilan ajratib massiv qiladi.
let ifoda = 'The quick brown fox jumps over the lazy dog.';
let sozlar = ifoda.split(' '); // probel bilan ajratish
// console.log(sozlar);

const movies = prompt("What's your favourite movies: ");
const userMovies = movies.split(", ");
console.log(userMovies);


// join() massiv elementlarini bir-biriga birlashtirish uchun ishlatiladi.
let cars1 = ["Malibu", "Lacetti", "Cobalt", "Nexia"];
let result = cars1.join(", ");
// console.log(result);


// sort() sonlarni o'sish tartibida va matnlarni alfavit tartibida tartiblaydi.
// sort() ning ichdagi function sonlarni kichikda kattaga qarab tartiblaydi.

// 1-usul
let sonlar = [4, 2, 7, 1, 9, 6];
sonlar.sort(compareFN);
// console.log(sonlar);

function compareFN(a, b) {
  return a - b;
}

// 2-usul
let sonlar2 = [4, 2, 7, 1, 9, 6];
sonlar2.sort((a, b) => a - b);
// console.log(sonlar2);


// matnlarni tartiblash:
let mevalar2 = ['olma', 'banan', 'anor', 'shaftoli', 'uzum'];
mevalar2.sort();
// console.log(mevalar2);
