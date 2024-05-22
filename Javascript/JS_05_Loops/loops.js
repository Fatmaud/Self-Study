/* ---------------------------------- */
/*                LOOPS               */
/* ---------------------------------- */
//~FOR
//?10 kez merhaba yazdirin
// for (let index = 1; index <= 10; index++) {
//   console.log(index, "MERHABA");
// }

//?1den n e kadar olan sayilarin toplami

// const N = +prompt("lütfen bir sayi giriniz!");
// let toplam = 0;

// for (let index = 1; index <= N; index++) {
//   //   toplam = toplam + index;
//   toplam += index;
// }
// console.log(toplam);

//? Örnek: Disaridan girilen sayinin asal oluip olmadigini tespit ederek sonucu yazdiran programi yaziniz.

// const sayi = prompt("Asallik kontrolü icin bir sayi giriniz!");

// const asal = true;

// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     asal == false;
//   }
// }
// console.log(asal ? "asaldir" : "asal degildir");

//? Örnek: --*for döngüsü ile*-- 0-100 arasinda 7 adet rastgele tamsayi üreten kod yazin.

for (let i = 1; i <= 7; i++) {
  const rastgele = Math.round(Math.random() * 100);
  console.log(rastgele);
}

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore nereye yakınsa oraya yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//~WHILE

//? Örnek: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

// let number = +prompt("Please write a number between 1-100!");
// while (number < 1 || number > 100) {
//   console.error("The number should be between 1 and 100!!!");
//   number = +prompt("Please try again!");
// }
// console.log("Congratulations", number);

//! while daki şart true old sürece altındaki süslü işler, false old anda süslünün dışına çıkılır!

//~DO WHILE
//? Örnek: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz.

// let number1;
// do {
//   number1 = +prompt("Please write a number between 1-100 for -do-while-! ");
//   (number1 < 1 || number1 > 100) && alert(number1);
// } while (number1 < 1 || number1 > 100);
// console.log(number1);

//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir.

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not isteyecek ve islemleri tekrar edecektir.//?

// let devam;
// do {
//   let vize = +prompt("Vize notunuzu giriniz!");
//   let final = +prompt("Final notunuzu giriniz!");

//   let ortalama = vize * 0.4 + final * 0.6;
//   console.log(ortalama >= 60 ? "tebrikler" : "kaldiniz");

//   devam = prompt("Devam etmek istiyorsaniz 'e/E' giriniz!");
// } while (devam.toUpperCase() == "E");

//? Örnek: Klavyeden q kaarakteri girilene kadar sayi girisi isteyen bir programi do-while döngüsü ile yaziniz.

// let sayi1;
// do {
//   sayi1 = prompt("lütfen sayi giriniz!");
// } while (sayi1 != "q");
// console.log("bitti");
