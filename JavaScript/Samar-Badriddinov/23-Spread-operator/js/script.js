"use strict";

function sumThreeNumbers(x, y, z) {
  console.log(x + y + z);
}

sumThreeNumbers(1, 2, 3);


// biz funksiyaga sonlardan iborat massivni to'g'ri uzatish uchun spread dan foydalanamiz.
const numbers = [1, 2, 3];
sumThreeNumbers(...numbers);
