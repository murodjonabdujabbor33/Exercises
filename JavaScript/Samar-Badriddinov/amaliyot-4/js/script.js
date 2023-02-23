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
  rememberMySeries: function() {
      for(let i = 0; i < 2; i++) {
        const SeriesName = prompt("Oxirgi ko'rgan ko'rgan serialingiz?"),
          SeriesRating = prompt("Ushbu serialga nechta baho qo'yasiz?");

          if (SeriesName != null && SeriesRating != null && SeriesName != "" && SeriesRating != "") {
            seriesDB.sereis[SeriesName] = SeriesRating;  // property: value;
            console.log("done");
          }
          else {
            console.log("error");
            i--;
          }
      }
  },
detectLevelSeries: function() {
    if (seriesDB.count < 5) {
      console.log("Kam serial ko'ribsiz.");
    }
    else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log("Siz klassik tomoshabin ekansiz.");
    }
    else if (seriesDB.count >= 10) {
      console.log("Siz Serilachi zvezda ekansiz.");
    }
    else {
      console.log("Error");
    }
},
ShowDB: function() {
    if (!seriesDB.private) {
      console.log(seriesDB);
    }
},
visableDB: function() {
  if (seriesDB.private === true) {
    seriesDB.private = false;
  } else if (seriesDB.private === false) {
    seriesDB.private = true;
  } else {
    console.log("Sizning private xususiyatingizga boolen qiymat kiritilmagan.");
  }
},
writeGenres: function() {
  for (let i = 0; i < 3; i++) {
    const movieGenre = prompt(`Yaxshi ko'rgan janringiz ${i+1}`);
    if (movieGenre === "" || movieGenre === null) {
      console.log("Siz noto'g'ri ma'lumot kiritdingiz.");
      i--;
    }
    else {
      seriesDB.genres[i] = movieGenre;
    }
  }

  // let genres = prompt("Yaxshi ko'rgan janrlaringizni vergul va bo'sh joy qo'yib yozing.");
  // if (genres === '' || genres === null) {
  //   console.log("Siz noto'g'ri ma'lumot kiritdingiz.");
  // } else {
  //   seriesDB.genres = genres.split(', ');
  // }

  seriesDB.genres.forEach(function(genre, index) {
    console.log(`Yaxshi ko'rgan ${index + 1} janringiz - ${genre}`);
  });
},
};

seriesDB.start();
seriesDB.visableDB();
seriesDB.writeGenres();
console.log(seriesDB);
