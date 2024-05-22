// "use strict";

//&ARRAY LOOPS

//^1)FOR LOOP

// const colors = ["red", "yellow", "green", "blue", "brown"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i].toUpperCase());
// }

// for (let i = 0; i < colors.length; i++) {
//   if (colors[i] == "red") continue;
//   if (colors[i] == "blue") break;

//   console.log(colors[i].toUpperCase());
// }

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// const rakamlar = [5, 7, 8, 9];
// let toplam = 0;
// for (let i = 0; i < rakamlar.length; i++) {
//   toplam += rakamlar[i];
// }
// console.log(toplam);

// const arr = [-5, 15, 22, -4, 45, 78];
// function topla(arr) {
//   let negatifler = 0;
//   let pozitifler = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negatifler += arr[i];
//     } else {
//       pozitifler += arr[i];
//     }
//   }
//   console.log(`dizideki negatif sayilarin toplami: ${negatifler} dir`);
//   console.log(`dizideki pozitif sayilarin toplami ${pozitifler} dir`);
// }
// topla(arr);

// const arr = [-5, 15, 22, -4, 45, 78];
// let negatifler = [];
// let pozitifler = [];

// function dizilereAyir(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negatifler.push(arr[i]);
//     } else {
//       pozitifler.push(arr[i]);
//     }
//   }
// }
// dizilereAyir(arr);
// console.log(negatifler);
// console.log(pozitifler);

// const notlar = [55, 77, 23, 89, 100];
// let toplam = 0;
// let ortalama = 0;
// console.log(notlar.length);

// for (let i = 0; i < notlar.length; i++) {
//   toplam += notlar[i];
//   ortalama = toplam / notlar.length;
// }
// console.log(ortalama);

//^2)WHILE LOOP

// let i = 0;
// while (i < colors.length) {
//   if (colors[i] == "red") {
//     i++;
//   }
//   console.log(colors[i].toLowerCase());
//   i++;
// }

//^3)for...in LOOP //empty indexleri atlar

// const colors = ["red", "yellow", "blue", "green", "brown"];

// for (let color in colors) {
//   console.log(colors[color]);
// }

// const adlar = ["Ahmet", "Can", "Mustafa", "Ayse", "Elif"];
// const soyAdlar = ["Öztürk", "Yilmaz", "Ari", "Cali", "Yazi"];

// const birlestir = (x, y) => {
//   let adVeSoyadlar = [];
//   for (const i in x) {
//     adVeSoyadlar[i] = `${x[i]} ${y[i]}`;
//   }
//   return adVeSoyadlar;
// };

// console.log(birlestir(adlar, soyAdlar));

//? ÖRNEK

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudent = (arr, search) => {
//   let counter = 0;
//   for (const i in arr) {
//     if (search === arr[i]) {
//       counter++;
//     }
//   }
//   if (!counter) {
//     return `${search} cannot be found`;
//   } else {
//     return `${search} is found ${counter} times`;
//   }
// };

// const name = prompt("enter your name:").toLowerCase();
// console.log(findStudent(students, name));

//^4)for...of LOOP

// const colors = ["red", "green", "blue", "green", "brown"];

// for (color of colors) {
//   console.log(color);
// }
// for (const iterator of object) {
// }
// //? ÖRNEK:

// const nums = [100, 20, -5, 9, -3, -87, 30];
// const negatif = [];
// const pozitif = [];

//&---1---Klasik for ile
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] < 0) {
//     negatif.push(nums[i]);
//   } else {
//     pozitif.push(nums[i]);
//   }
// }
// console.log(negatif);
// console.log(pozitif);

//&---2---for in ile

// for (const i in nums) {
//   if (nums[i] < 0) {
//     negatif.push(nums[i]);
//   } else {
//     pozitif.push(nums[i]);
//   }
// }
// console.log(negatif);
// console.log(pozitif);

//&---2---for of ile

// for (let num of nums)
//   if (num < 0) {
//     negatif.push(num);
//   } else {
//     pozitif.push(num);
//   }

// console.log(negatif);
// console.log(pozitif);

//? ÖRNEK

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudent = (arr, search) => {
//   let counter = 0;
//   for (const student of arr) {
//     if (search === student) {
//       counter++;
//     }
//   }
//   if (!counter) {
//     return `${search} is found ${counter} times`;
//   } else {
//     return `${search} is found ${counter} times`;
//   }
// };

// const name = prompt("enter your name:").toLowerCase();
// console.log(findStudent(students, name));

//?ÖRNEK: dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

// const cars = ["bmw", "mercedes", "audi", "volvo"];

// let result = "";
// for (let car of cars) {
//   result += car;
// }
// console.log(result);

//^4)forEach----loop degil!!! Array iteration method.
//^----->en az bir, en fazla 3 parametre alir. ilki current value within the array. bunu yazmak zorunlu.
//^-----> parametrelerin yeri bellidir yani sirasi önemlidir. (sirasiyla: c.value-index-array)
//^----->callback function ila calisir

// let students = ["John", "Ali", "Ahmet"];

// students.forEach(yazdir);

// function yazdir(item) {
//   console.log(item);
// }
// students.forEach((k) => console.log(k)); //arrow ile

//^5)MAP()----callback function

// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayse", "canan"];
// const newNames = names.map((name) => name.toUpperCase());
// console.log(newNames, names);
// console.log(names.map((name) => name.toUpperCase()));

// //? ÖRNEK: prices dizisindeki rakamlarin Euro ve Dolar karsiliklarini hesaplatarak yeni dizilere kaydediniz.

// const euro = 18.23;
// const dollar = 18.19;
// const pricesTl = [100, 150, 100, 50, 80];

// const euroT = pricesTl.map((price) => Number((price / euro).toPrecision(3)));
// const dollarT = pricesTl.map((price) =>
//   Number((price / dollar).toPrecision(3))
// );

// console.log(euroT);
// console.log(dollarT);

//? ÖRNEK: products dizisinin icindeki her ürünü büyük harf olarak degistir.

// const products = ["Iphone", "Samsung", "lenova", "macbook"];

// console.log(products.map((product) => product.toUpperCase()));
// console.log(products);

// // 3 parametre ile

// products.map((product, i, arr) => (arr[i] = product.toUpperCase()));
// console.log(products); //! orjinal array degisti

//^6)FILTER()----callback function
//? Maasi 10000 den büyük olanlara baska array icinde yazdir
//? Tüm maaslara %40 zam yaparak konsolda yazdirin

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 20000];

// const moreThan = salaries.filter((salary) => salary > 10000);
// console.log(moreThan);

// console.log(salaries.map((salary) => Number((salary * 1.4).toPrecision(3))));

// //?Maasi 9000 den düsük olanlara 10% zam yaparak konsola yazdir.

// const lessThan = salaries
//   .filter((salary) => salary < 9000)
//   .map((salary) => Math.trunc(salary * 1.1))
//   .forEach((salary) => console.log(salary));
// console.log(lessThan); //!foreach eklenince return kalmadigi icin clg undefined dönüyor. Foreach olmadiginda clg diger functionlarin return unu yazdiriyor

//^7)REDUCE()----callback function----iteration method

const numbers = [1, -1, 2, 3];
const sum = numbers.reduce((total, number) => total + number);

console.log(sum);

//?ÖRNEK:Dizideki her bir fiyati konsola yazdirin.

// const prices = [100, 250, 50, 89];

// prices.forEach((price) => console.log(price));

// //?ÖRNEK: Dizideki elemanlarin toplamini konsola yazdir.
// let sum = 0;
// prices.forEach((price) => (sum += price));
// console.log(`SUM:`, sum);

//?  ÖRNEK: Dizideki elemanlarin herbirinin ara toplamini konsola yazdir. Ayrica her bir fiyata %10 zam yap.

// const prices = [100, 250, 50, 89];

// let sum = 0;
// prices.forEach((price, index, arr) => {
//   sum += price;
//   console.log(`${index + 1}.iteration: ${sum}`);
//   // prices[index] = price * 1.1;
//   arr[index] = Math.trunc(price * 1.1);
// });
// console.log(prices);

//Bu zorlama bir kullanim, cünkü islem yapmak icin orjinal array bozuluyor. Buna alternatif yollar da asagidaki yöntemler.

// const myArr = [1, 2, 5, 6, 7, 3, 4];
// const newArr = myArr;
// myArr.sort();
// console.log(newArr);
