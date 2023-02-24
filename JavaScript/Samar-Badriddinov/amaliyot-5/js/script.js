"use strict";

// ./ -> shu faylning o'zi degani.
// ../ -> bitta orqaga chiqsh degani.

// 1-vazifa (Reklama bloklarini o'chirish):
// const adv = document.querySelector('.promo__adv');
// const advImg = adv.querySelectorAll('img');
const advImg = document.querySelectorAll('.promo__adv img');
console.log(advImg);

advImg.forEach(item => {
  item.remove();
});

// 2-vazifa (drama janrini komediya almashtirish):
const ganreTitle = document.querySelector('.promo__genre');
ganreTitle.textContent = 'KOMEDIA';
console.log(ganreTitle);

// 3-vazifa (JavaScript yordamida orqa fonni o'zgartiring):
const changeBackgrund = document.querySelector('.promo__bg');
changeBackgrund.style.backgroundImage = 'url(img/1.jpg)';

// 4-5-vazifa (Seriallarni JS dagi massiv yordamida ko'rsating va ularni raqamlang):
const seriesDB = {
  series: [
    'Omar',
    'The Final Legacy',
    'Ertugrul',
    'Magnificent Century',
    'The Great Saljuks: Guardiands...',
  ],
};
// console.log(seriesDB.series[0]);
const seriesList = document.querySelector('.promo__interactive-list');
//stirng holatida olish:
// console.log(seriesList.innerHTML);

seriesList.innerHTML = '';
seriesDB.series.forEach((item, idx) => {
  seriesList.innerHTML += `<li class="promo__interactive-item">${idx + 1} ${item}
  <div class="delete"></div></li>`;
});
