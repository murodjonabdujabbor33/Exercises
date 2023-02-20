"use strict";

// FOR ORQALI


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
let i = 1;
do {
  for (let a = 0; a < 2; a++) {
    const SeriesName = prompt("Oxirgi ko'rgan ko'rgan serialingiz?"),
    SeriesRating = prompt("Ushbu serialga nechta baho qo'yasiz?");

    if (SeriesName != null && SeriesRating != null && SeriesName != "" && SeriesRating != "") {
      SeriesDB.Sereis[SeriesName] = SeriesRating;  // property: value;
      console.log("done");
    }
    else {
      console.log("error");
      a--;
    }
  }

    if (SeriesDB.count < 5) {
      console.log("Kam serial ko'ribsiz.");
    }
    else if (SeriesDB.count >= 5 && SeriesDB.count < 10) {
      console.log("Siz klassik tomoshabin ekansiz.");
    }
    else if (SeriesDB.count >= 10) {
      console.log("Siz Serilachi zvezda ekansiz.");
    }
    else {
      console.log("Error");
    }
    i++;
}
while(i < 2);

console.log(SeriesDB);
