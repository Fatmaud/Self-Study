// //! verilen sayının çarpım tablosunu yazdıran fonksiyon
// //printMultiplicationTable(n);

// const printMultiplication = (num) => {
//   for (let i = 1; i <= 10; i++) {
//     result = console.log(`${num}*${1}=${num * i}`);
//   }
//   //   return result;
// };
// printMultiplication(3);

//~Math.random

//! Math.random: 0-1 arasi rastgele sayi üretir! Sonuna sayi ekleyerek o sayil ile bir sonraki sayi arasinda rastgele sayi üretilebilir.
// for (let i = 0; i < 100; i++) {
//   console.log(Math.random() + 2);
// }

//*Örnek: Tavla zari fonksiyonu her cagirildiginda 1-6 arasi rastgele sayi üretecek.

// function dice() {
//   for (let i = 0; i < 4; i++) {
//     console.log(Math.ceil(Math.random() * 6));
//   }
// }

//*Örnek: Iki tane zar atacak:
//ikisi de esit gelirse consola "tebrikler -- attiniz" yazacak.
//sonuclari 2-3, 6-5 gibi sergileyecek.
// her zaman sol tarafta kücük zar sergilenecek.

// function zar() {
//   let zar1 = Math.floor(Math.random() * 6 + 1);
//   let zar2 = Math.floor(Math.random() * 6 + 1);
//   if (zar1 < zar2) {
//     console.log(`Oyna: ${zar1} - ${zar2}`);
//   } else if (zar2 < zar1) {
//     console.log(`Oyna: ${zar2} - ${zar1}`);
//   } else if (zar1 == zar2) {
//     console.log(`${zar1} - ${zar2} Tebrikler çift attınız!`);
//   } else console.log(`Bir şeyler ters gitti`);
//   return [zar1, zar2];
// }
// zar();

// //*Örnek: her cagirildiginda verilen min. max. parametreleri arasinda sayi üreten bir fonksiyon

// function num(minValue, maxValue) {
//   return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
// }
// console.log(num(100, 200));

// for (let i = 0; i < 10; i++) {
//   console.log(num(100, 200));
// }

//* Örnek: her çağrıldığında arka plan rengini rastgele değiştirecek bir fonksiyon

// const randomColor = () => {
//   const x = () => {
//     return Math.floor(Math.random() * 256);
//   };
//   let r = x();
//   let g = x();
//   let b = x();
//   return `rgb(${r}, ${g}, ${b})`;
// };

// document.body.style.backgroundColor = randomColor();

//*Örnek: Çitlikteki hayvan sayılarını parametre olarak alacak ve ayak sayıları toplamını döndürecek bir fonksiyon yazınız.
// const numberOfLegs = (chiken, cow, duck, goat) => {
//   const legs = (chiken + duck) * 2 + (cow + goat) * 4;
//   return legs;
// };
// console.log(numberOfLegs(4, 5, 6, 7));

// //* Ürün fiyatı ve indirim oranı verilecek.
// // 1- orjinal fiyat
// // 2- İndirim oranı
// // 3- İndirimli tutar

// const fullPriceVsDiscountedPrice = (x, y) => {
//   return ` Full Price: ${x} Discount:%${y} SalePrice: ${x - (x * y) / 100}`;
// };
// console.log(fullPriceVsDiscountedPrice(100, 20));

//*Sicaklik cevirme hesaplamalari
//Celcius Fahrenheit derece cevrim fonksiyonu

// let inputC = 30;
// function celciusToFahrenheit(celcius) {
//   const fahrenheit = (celcius * 9) / 5 + 32;
//   return fahrenheit;
// }

// console.log(celciusToFahrenheit(30));
// console.log(`${inputC} Celcius, ${celciusToFahrenheit(inputC)} Fahrenheittir.`);

// // Fahrenheit Celcius derece cevrim fonksiyonu

// let inputF = 86;
// function fahrenheitToCelcius(fahrenheit) {
//   const celcius = ((fahrenheit - 32) * 5) / 9;
//   return celcius;
// }

// console.log(fahrenheitToCelcius(86));
// console.log(`${inputF}Fahrenheit , ${fahrenheitToCelcius(inputF)} Celciustur.`);

// // Kullanicidan sicaklik türüne göre sicaklik derecesi isteme

// while (true) {
//   let value = prompt(`Lütfen seciminizi yapin:
//   1- C to F
//   2-F to C
//   q- Cikis`);

//   if (value == 1) {
//     console.log(
//       celciusToFahrenheit(+prompt(`Cevrilmesini istediginiz degeri giriniz:`))
//     );
//   } else if (value === "2") {
//     console.log(
//       fahrenheitToCelcius(+prompt(`Cevrilmesini istediginiz degeri giriniz:`))
//     );
//   } else if (value == `q`) {
//     break;
//   } else {
//     console.log(`veri girisi hatali!`);
//   }
// }

// const fToC = (fahrenheit) => {
//   return (((fahrenheit - 32) * 5) / 9).toFixed(2);
// };

// const cToF = (celsius) => {
//   return ((celsius * 9) / 5 + 32).toFixed(2);
// };

// while (true) {
//     let value = prompt("F (fahrenheit) | C (celsius) | Q (exit)").toUpperCase();
//     if (value == "Q") break;
//     else{
//     let input = parseInt(prompt("Deger girin:"));
//     if (value === "F") {
//         console.log(`${input} Fahrenheit, ${fToC(input)} Celsius`);
//     } else if (value === "C") {
//         console.log(`${input} Celsius, ${cToF(input)} Fahrenheit`);
//     } else {
//         console.log("invalid value");
//       }
//     }
// }

//* Fonksiyonla artik yil hesaplamasi:

// const year = +prompt(`Yil giriniz:`);

// function artikYilHesapla(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year + " bir artık yıldır.");
//   } else {
//     console.log(year + " bir artık yıl değildir.");
//   }
// }
// artikYilHesapla(2009);


//*STRINGLER
