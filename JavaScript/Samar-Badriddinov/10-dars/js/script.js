"user strict";

// qo'shish
console.log("Murodjon " + "Abdujabbor");
console.log(20 + "10"); // 2010
console.log(20 + +"10"); // 30
console.log("Murodjon " + 8);
console.log(10 + 10);





// incr, decr
let incr = 10;
let decr = 10;
console.log(incr++); // kamayish bundan keyin sodir bo'ladi.
console.log(decr--);
console.log(incr);
console.log(decr);

let incr1 = 20;
let decr1 = 20;
console.log(++incr1); // kamayish shu zahotiyoq sodir bo'ladi.
console.log(--decr1);
console.log(incr1);
console.log(decr1);


// qoldiqni topish (%)
console.log(5 % 2);


// Boolean
console.log(5 * 5 == 25);
console.log(5 * 5 == "25"); // faqat qiymati solishtiriladi.
console.log(5 * 5 != 25);
console.log(5 * 5 === "25"); // qiymati va type solishtiriladi.



// && = va   || = yoki
const isName = true;
const isLastname = true;
const isAge = false;
const isMarried = false;

console.log(isName && isLastname);
console.log(isName && isAge);
console.log(isName || isLastname);
console.log(isName || isAge);
console.log(isAge || isMarried);
console.log(isName && isLastname && !isAge); // ! false ni true ga aylantiradi.



console.log(2 + 2 * 2 !== "6"); // ham qiymatini ham ma'lumot turuni tekshiryapti.
console.log(2 + 2 * 2 != "6"); // bunda faqat qiymatlari tekshirilyapti.
