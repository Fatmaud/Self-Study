//~Falsies
// 0, null, "", undefined ve NaN boolean degeri her zaman false olan degerlerdir.

//~ || &&
const v1 = false || 0 || 12.6 || true || false || null;

console.log(v1);

const v2 = false || 0 || undefined || null || NaN;
console.log(v2);

const v3 = 5 && true && true && 0 && "";
console.log(v3);

const v4 = 5 && true && true && 12 && -5;

console.log(v4);

//!olumsuz
console.log(!v4); //degilini soruyrz, kendi degeri true oldugu icin degili false cikti
console.log(!v2); // true

//~CONDITIONALS
// const number1 = +prompt("1. sayiyi giriniz");
// const operation = prompt("+, -, *, /islemlerinden birini giriniz");
// const number2 = Number(prompt("2. sayiyi giriniz"));
// let result;

// if (operation == "+") {
//   result = number1 + number2;
// } else if (operation == "-") {
//   result = number1 - number2;
// } else if (operation == "*") {
//   result = number1 * number2;
// } else if (operation == "/") {
//   if (number2 != 0) {
//     result = number1 / number2;
//   } else {
//     alert("payda `0` olamaz!");
//   }
// } else {
//   alert("yanlis islem girdiniz!");
// }
// 6;
// console.log(result);

//~TERNARY
//*1.yol
// const age = 12;
// const gender = "male";
// const health = true;

// if (age >= 20 && gender == "male" && health == true) {
//   console.log("askerlik yapabilir");
// } else {
//   console.log("askerlik yapamaz");
// }
// //*2.yol
// age >= 20 && gender == "male" && health == true
//   ? console.log("askerlik yapabilir")
//   : console.log("askerlik yapamaz");

// //?example ternary

// const grade1 = prompt("please enter your grade");
// grade1 >= 50 ? console.log("SUCCESS") : console.log("FAIL");

// //~SWITCH-CASE

// const number1 = +prompt("1. sayiyi giriniz");
// const operation = prompt("+, -, *, /islemlerinden birini giriniz");
// const number2 = Number(prompt("2. sayiyi giriniz"));
// let result = 0; //result i bos da birakabiliriz 0 dgeri de atayabiliriz//

// switch (operation) {
//   case "+":
//     result = number1 + number2;
//     break;
//   case "-":
//     result = number1 - number2;
//     break;
//   case "*":
//     result = number1 * number2;
//     break;
//   case "/":
//     if (number2 != 0) result = number1 / number2;
//     else alert("payda `0` olamaz!");
//     break;

//   default:
//     alert("Yanlis islem girdiniz!");
//     break;
// }
// console.log(`${number1} ${operation} ${number2} = ${result}`);

//*****TERNARY EXAMPLES */
//? 1) Maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın.

// const asgariUcret = 17000;
// const maas = +prompt("Lütfen maasinizi giriniz");

// const zamliMaas = maas <= asgariUcret ? maas * 1.25 : maas * 1.1;

// console.log(zamliMaas);

//? 2) 10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

// const Schuld = +prompt("borcunuzu giriniz");
// const Gehalt = +prompt("maasinizi giriniz");

// console.log(
//   Gehalt * 10 - Schuld >= 5000 ? "kredi alabilir🎉" : "kredi alamaz😥"
// );

//? 3) Not Degerleri

// let grade = +prompt("Notunuzu giriniz:");
// let result;
// if (grade >= 0 && grade <= 25) {
//   result = "FF";
// } else if (grade >= 26 && grade <= 45) {
//   result = "DD";
// } else if (grade >= 46 && grade <= 65) {
//   result = "CC";
// } else if (grade >= 66 && grade <= 75) {
//   result = "BB";
// } else if (grade >= 76 && grade <= 90) {
//   result = "BA";
// } else if (grade >= 91 && grade <= 100) {
//   result = "AA";
// } else console.log("0-100 arasinda bir sayi giriniz!");

// console.log(result);

// const x = 5;
// const y = 10;

// if ((x + y) % x && y < 15) {
//   console.log("Both c.s are true");
// } else {
//   console.log("False");
// }
