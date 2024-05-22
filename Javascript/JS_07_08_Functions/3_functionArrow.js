// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Örnek1: Verilen sayinin 3 ün kati olup olmadigini kontrol et.

// const control = (sayi) =>
//   sayi % 3 == 0 ? "3 ün katidir" : "3 ün kati degildir";

// console.log(control(25));

//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
  console.log("===========================");
  console.log("     JAVASCRİPT DERSİ      ");
  console.log("===========================");
};
menu();

//*Örnek3: Silindirin hacmini hesaplama (formül=Pi*r**2*h)

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log(hacimHesapla(3, 7));
console.log(hacimHesapla(4, 9).toFixed(3));

//* ORNEK5: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibonacciNumber = (n) => {
  let fiboSol = 1;
  let fiboSag = 1;
  let fiboYeni = 0;
  // let toplam=0;
  let toplam = 2;

  for (let i = 1; i < n - 1; i++) {
    yeniFibo = fiboSol + fiboSag;

    fiboSol = fiboSag;
    fiboSag = yeniFibo;
  }
  return yeniFibo;
};

console.log(fibonacciNumber(9));
