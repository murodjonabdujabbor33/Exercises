"use strict";

// vazifa-1
const NumberOfSeries = prompt("Nechta serial ko'rdingiz", "");
console.log(NumberOfSeries);

// vazifa-2
const SeriesDB = {
  count: NumberOfSeries,
  Sereis: {}, // object
  Actors: {}, // object
  Genres: [], // massiv
  Private: false,
};

// vazifa-3
const SeriesName = prompt("Oxirgi ko'rgan ko'rgan serialingiz", ""),
      SeriesRating = prompt("Ushbu serialga nechta baho qo'yasiz", ""),
      SeriesName1 = prompt("Oxirgi ko'rgan ko'rgan serialingiz", ""),
      SeriesRating1 = prompt("Ushbu serialga nechta baho qo'yasiz", "");

SeriesDB.Sereis[SeriesName] = SeriesRating;  // property: value;
SeriesDB.Sereis[SeriesName1] = SeriesRating1;

console.log(SeriesDB);




// object ga dinamik tarzda xususiyat qo'shish
const theif = {
  isJacket: 'black',
  isHair: 'long',
};
const property = 'age', value = 30;

theif[property] = value;
console.log(theif);