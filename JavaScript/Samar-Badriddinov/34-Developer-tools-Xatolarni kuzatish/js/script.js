"use strict";

function sayHello() {
  console.log("Good morning.");
}

sayHello();


function sayBye() {
  console.log("Bye");
}

sayBye();


const arr = [1, 4, 32, 56, 98],
  sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a-b;
}

console.log(sorted);