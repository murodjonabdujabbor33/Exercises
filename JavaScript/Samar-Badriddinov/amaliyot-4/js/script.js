"use strict";



// vazifa-1
const seriesDB = {
  count: 0,
  sereis: {}, // object
  actors: {}, // object
  genres: [], // massiv
  private: false,
  start: function startApp() {
    seriesDB.count = +prompt("Nechta serial ko'rdingiz", "");
    while (seriesDB.count == "" || seriesDB.count == null || isNaN(seriesDB.count)) {
      seriesDB.count = +prompt("Nechta serial ko'rdingiz", "");
    }
  },
visableDB: function changePrivate() {
  if (seriesDB.private === true) {
    seriesDB.private = false;
  } else if (seriesDB.private === false) {
    seriesDB.private = true;
  } else {
    console.log("Sizning private xususiyatingizga boolen qiymat kiritilmagan.");
  }
},
writeGenres: function countGenres() {
  for (let i = 0; i < 3; i++) {
    const movieGenre = prompt(`Yaxshi ko'rgan janringiz ${i+1}`);
    seriesDB.genres[i] = movieGenre;
    if (seriesDB.genres[i] === "" || seriesDB.genres[i] === null) {
      i--;
    }
  }
  seriesDB.genres.forEach(function(genre, index) {
    console.log(`Yaxshi ko'rgan ${index} janringiz - ${genre}`);
  });
},
};

seriesDB.start();
seriesDB.visableDB();
seriesDB.writeGenres();
console.log(seriesDB);





// // vazifa-3
// function rememberMySeries() {
//   for(let i = 0; i < 2; i++) {
//     const SeriesName = prompt("Oxirgi ko'rgan ko'rgan serialingiz?"),
//       SeriesRating = prompt("Ushbu serialga nechta baho qo'yasiz?");

//       if (SeriesName != null && SeriesRating != null && SeriesName != "" && SeriesRating != "") {
//         SeriesDB.Sereis[SeriesName] = SeriesRating;  // property: value;
//         console.log("done");
//       }
//       else {
//         console.log("error");
//         i--;
//       }
//   }
// }
// // rememberMySeries();


// function detectLevelSeries() {
//   if (SeriesDB.count < 5) {
//     console.log("Kam serial ko'ribsiz.");
//   }
//   else if (SeriesDB.count >= 5 && SeriesDB.count < 10) {
//     console.log("Siz klassik tomoshabin ekansiz.");
//   }
//   else if (SeriesDB.count >= 10) {
//     console.log("Siz Serilachi zvezda ekansiz.");
//   }
//   else {
//     console.log("Error");
//   }
// }
// detectLevelSeries();


// function ShowDB(hidden) {
//   if (!hidden) {
//     console.log(SeriesDB);
//   }
// }
// ShowDB(SeriesDB.Private);


// function writeGenres() {
//   for (let i = 0; i < 3; i++) {
//     const movieGenre = prompt(`Yaxshi ko'rgan janringiz ${i+1}`);
//     SeriesDB.Genres[i] = movieGenre;
//   }
// }
// writeGenres();

// console.log(SeriesDB);
