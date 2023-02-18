"use strict";

let StartNum = 1;
// first
while (StartNum <= 100) {
  console.log(StartNum);
  StartNum++;
}


// second
let StartNum1 = 1;
do {
  console.log(StartNum);
  StartNum++;
} while (StartNum1 <= 100);



// third
for (let Number = 1; Number <= 100; Number++) {
  console.log(Number);
}

// break
for (let Number1 = 1; Number1 <= 10; Number1++) {
  if (Number1 === 8) {
    break; // raqam 8 ga kelganda tsikl to'xtaydi.
  }
  console.log(Number1);
}

// continue
for (let Number2 = 1; Number2 <= 10; Number2++) {
  if (Number2 === 4) {
    continue; // raqam 4 ga kelgan paytda 1 ta oldinga o'tib ketadi.
  }
  console.log(Number2);
}