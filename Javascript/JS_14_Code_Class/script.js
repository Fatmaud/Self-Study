// //?ÖRNEK1: bir dizideki elemanlarin ortalamasini bulan fonksiyonu yazin.

// const numbers = [34, 56, 56, 87, 90];
// toplam = 0;
// const ortalama = (array) => {
//   for (const num in numbers) {
//     toplam += numbers[num];
//   }
//   return toplam / numbers.length;
// };
// console.log(ortalama(numbers));

// //2.yol:

// function average(array) {
//   let valid = numbers.filter((num) => num === typeof "number");
//   if (valid.length > 0) {
//     let toplam = numbers.reduce((topla, b) => topla + b, 0);
//   }
//   return toplam / numbers.length;
// }
// console.log(average(numbers));

// //?ÖRNEK2: Girilen bir cümledeki kelime sayisini bulan fonksiyonu yazin.

// const sentence = "Merhaba Cohort DE_08";

// const wordCount = (newSentence) => {
//   const sumWords = newSentence.split(" ").length;
//   //   newSentence.split(/\s+/).length//birden fazla boslugu siler
//   return sumWords;
// };
// console.log(wordCount(sentence));

// //?ÖRNEK3: Örnek2 deki cümleyi alip tersine cevirerek büyük harflerden olusan yeni bir cümle olusturun.

// const changedSentence = (newSentence) => {
//   let lastSentence = sentence.toUpperCase().split(/\s+/).reverse().join(" ");
//   return lastSentence;
// };
// console.log(changedSentence(sentence));

//?ÖRNEK4:
//!Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:

//? "[Clarusway'i bulduğunuz kelimenin sırası] 'nda Clarusway'i buldum!"

//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.

//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

// test cümlesi: "I like Clarusway"
// test cümlesi: "I like bootcamps"

// const findClw = (sentence) => {
//   if (sentence.includes("Clarusway")) {
//     console.log(
//       ` I found Clarusway at ${sentence.split(" ").indexOf("Clarusway") + 1} `
//     );
//   } else {
//     console.log(`I couldn't find Clarusway😒`);
//   }
// };
// console.log(findClw("I like Clarusway"));

//  sentence.split(" ").indexOf("Clarusway") + 1; bunu bir degiskene atayarak da kullanabiriz. O zmn ${} icine direkt atadigimiz degisken ismini yazariz

//?ÖRNEK5: Bir öge dizisini alin, tüm yinelenen ögeleri kaldiran ve eski diziyle ayni sirada yeni bir dizi döndüren bir fonksiyon  olusturan programi yazin.

// removeDuplicated([1, 0, 1, 0, 1]);//output[1,0]
// removeDuplicated(["the", "small", "cat", "the", "cat"]) //output ["the, "small, "cat"]

// const removeDuplicated = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };
// console.log(removeDuplicated([1, 0, 1, 0, 1]));
// console.log(removeDuplicated(["the", "small", "cat", "the", "cat"]));

//?ÖRNEK6: Biz dizideki ilk harfi A ile baslayan elemanlari yeni bir diziye alan fonksiyonu yazin

const words = ["Apple", "Banana", " Orange", "Avocado", "Grape", "Apricot"];

const firstLetterA = (arr) => {
  let newArr = [];

  const filteredWords = arr.filter(
    (word) => typeof word === "string" && word.startsWith("A")
  );

  return filteredWords;
};
console.log(firstLetterA(words));

//?ÖRNEK7: Bir dizide verilem maaslara %10 zam yapilacak ama hala 20000 altinda kalanlara ek ödeme planlanacak.
//! a- Kaç kişi zam olsa bile 20000 altında kalıyor

// let salaries = [18000, 13000, 17000, 24000, 18500, 21000, 19300];

// const ekOdeme = (maas) => {
//   let ekZam = [];
//   for (let i = 0; i < salaries.length; i++) {
//     if (salaries[i] * 1.1 < 20000) {
//       ekZam.push(salaries[i]);
//     }
//   }
//   return ekZam.length;
// };
// console.log(ekOdeme(salaries));

//2. ve kisa yol:
let salaries = [18000, 13000, 17000, 24000, 18500, 21000, 19300];
const under20K = salaries.filter((salary) => salary + salary * 0.1 < 20000);
console.log(under20K.length);

//! b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı

let addBudget = salaries.map((salary) => {
  let increased = salary * 1.1;
  return increased < 20000 ? 20000 - increased : 0;
});

let totalPayment = addBudget.reduce((sum, payment) => sum + payment);
console.log(addBudget);
