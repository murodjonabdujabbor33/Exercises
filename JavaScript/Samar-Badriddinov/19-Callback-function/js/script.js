"use strict";

// agar funksiyamizga serverdan ma'lumot biroz kechiksa, bu funksiyadan boshqa funksiya ishlab turadi, qachon ma'lumoti kelsa keyin ishlaydi.
function first(cb) {
  // code
  setTimeout(() => {
    console.log(1);
    cb();
  }, 1000);
}

function second() {
  // code
  console.log(2);
}

first(second);


// 1 ta funksiya ishlagandan keyin boshqasi ishlashi uchun bizga callback function(anonim function) lar kerak bo'ladi.
function edu(subject, callback) {
  console.log(`I wanna teach ${subject}`);
  callback();
}
// callback function ishlatishning 1-usuli
edu("JavaScript", function () {
  console.log("That's great");
});

// callback function ishlatishning 2-usuli. Bu usulda callback function ni chaqirib qo'ymaymiz, u 1-funksiyamiz ishlaganidan keyin bajarilishi kerak.
function edu2(subject, callback) {
  console.log(`I wanna teach ${subject}`);
  callback();
}
function done() {
  console.log("That's great");
}

edu2("JavaScript", done);
