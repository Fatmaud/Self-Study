//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama

//*Senkron Programlama******

// const bekle = (ms) => {
//   const start = new Date().getTime();

//   while (new Date().getTime() < start + ms) {}
// };

// console.time("timer1");
// bekle(3000);
// console.timeEnd("timer1");

//*Asenkron Programlama

//* 1- (setTimeout) 1 Seferlik****

// setTimeout(() => {
//   console.log("aleyküm selam");
// }, 3000);

// console.log("selamün aleyküm");

// setTimeout(() => {
//   console.log("naber");
// }, 1000);

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking (kod burada takılı kalmaz alttaki kodlarda çalışır)

//* 2- (setInterval) 1 Seferlik****

// let counter = 0;

// const interval1 = setInterval(() => {
//   console.log(++counter);
//   if (counter == 6) {
//     //! intervali durdurma kod blogu---yazmazsak sonsuz döngüye giriyor
//     clearInterval(interval1);
//   }
// }, 1000);

// //?callback hell

// setTimeout(() => {
//   console.log("ayse:s.a. ahmet");
//   setTimeout(() => {
//     console.log("ahmet:a.s. ayse nasılsın");
//     setTimeout(() => {
//       console.log("ayse:iyiyim sağol");
//     }, 1000);
//   }, 1000);
// }, 1000);
