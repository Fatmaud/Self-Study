//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

console.log("******** 2- EXPRESSION*******");

//* Örnek1:tek-çift kontrolü

// function isEvenOdd() {

// }

const isEvenOdd = function (sayi) {
  return sayi % 2 == 0 ? "cifttir" : "tektir";
};
console.log(isEvenOdd(6));
console.log(isEvenOdd(3));

//* Örnek2: verilen sayyilarin en büyügünü bul.

const findTheBiggest = function (a, b, c) {
  if (a > b && a > c) {
    biggest = a;
  } else if (b > a && b > c) {
    biggest = b;
  } else {
    biggest = c;
  }
  return biggest;
};

console.log(findTheBiggest(3, 5, 9));

//*Örnek3: arguments keyword ile

const findEst = function (params) {
  //   console.log(arguments);

  let biggest1 = arguments[0];
  let smallest = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > biggest1) biggest1 = arguments[i];
    if (arguments[i] < smallest) smallest = arguments[i];
  }
  return ` ${biggest1}; ${smallest}`;
};

console.log(findEst(90, 345, 123, 23, 545, 112, 5454, 76767, 22));

//*Örnek4: bir fonksiyonun icinden baska bir fonksiyon cagirma

const usAl = function (s1, s2) {
  return s1 ** s2;
};
const cevreBul = function (s1, s2) {
  return (s1 + s2) * 2;
};
const alanBul = function (s1, s2) {
  return s1 * s2;
};

const hesapla = function (secim, v1, v2) {
  let sonuc;
  if (secim == "area") sonuc = alanBul(v1, v2);
  else if (secim == "perimeter") sonuc = cevreBul(v1, v2);
  else if (secim == "root") sonuc = usAl(v1, v2);
  return sonuc;
};

console.log(hesapla("area", 3, 5));
console.log(hesapla("perimeter", 3, 5));
console.log(hesapla("root", 3, 5));

//*Örnek5:
//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre,
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

// const calculate = function (dogumYili) {
//   const ortOmur = 95;
//   const yas = new Date().getFullYear - dogumYili;
//   const kalanOmur = ortOmur - yas;

//   if (kalanOmur > 0 && kalanOmur <= 10) {
//     return `${kalanOmur} yilin var. Sen bu değerleri önemseme hayatın tadını çıkar`;
//   } else if (kalanOmur > 10 && kalanOmur <= 20) {
//     return `${kalanOmur} yilin var. Gezmek görmek istediğin yerler varsa yola çıkma zamanı...`;
//   } else {
//     return `${kalanOmur} yilin var. Daha gidecek cok yolun var...`;
//   }
// };

// console.log(calculate(+prompt("Dogum yilinizi giriniz:")));
