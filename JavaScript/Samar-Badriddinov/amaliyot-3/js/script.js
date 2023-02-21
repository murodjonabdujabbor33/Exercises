"use strict";

// FOR ORQALI


// vazifa-1
let NumberOfSeries;
function startApp() {
  while (NumberOfSeries == "" || NumberOfSeries == null || isNaN(NumberOfSeries)) {
    NumberOfSeries = prompt("Nechta serial ko'rdingiz", "");
  }
}
startApp();

// vazifa-2
const SeriesDB = {
  count: NumberOfSeries,
  Sereis: {}, // object
  Actors: {}, // object
  Genres: [], // massiv
  Private: false,
};

// vazifa-3
function rememberMySeries() {
  for(let i = 0; i < 2; i++) {
    const SeriesName = prompt("Oxirgi ko'rgan ko'rgan serialingiz?"),
      SeriesRating = prompt("Ushbu serialga nechta baho qo'yasiz?");

      if (SeriesName != null && SeriesRating != null && SeriesName != "" && SeriesRating != "") {
        SeriesDB.Sereis[SeriesName] = SeriesRating;  // property: value;
        console.log("done");
      }
      else {
        console.log("error");
        i--;
      }
  }
}
// rememberMySeries();


function detectLevelSeries() {
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
}
detectLevelSeries();


function ShowDB(hidden) {
  if (!hidden) {
    console.log(SeriesDB);
  }
}
ShowDB(SeriesDB.Private);


function writeGenres() {
  for (let i = 0; i < 3; i++) {
    const movieGenre = prompt(`Yaxshi ko'rgan janringiz ${i+1}`);
    SeriesDB.Genres[i] = movieGenre;
  }
}
writeGenres();

console.log(SeriesDB);
