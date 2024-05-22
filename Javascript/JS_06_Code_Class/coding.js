//? CHALLENGE1:  18 yaşından büyüklerin alkol kullanabileceği 18 yaşından küçüklerin alkol kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız.
//* if else ile:

// let age = +prompt("Please enter your age!");

// if (age < 18) {
//   console.error("You are not allowed to consume alcoholic drinks!!!");
// } else if (age >= 18) {
//   console.log("You can consume alcoholic drinks ! ");
// } else {
//   console.log("Please write your age in numbers!");
// }

//*ternary operator ile:

// const age1 = +prompt("Please enter your age!");
// let response =
//   age1 >= 18
//     ? "You are not allowed to consume alcoholic drinks!"
//     : "You can consume alcoholic drinks ! ";

// let age = +prompt("Please enter your age!");

// while (age == "" || isNaN(age)) {
//   age = +prompt("Please write your age in numbers!");
// }

// let response =
//   age >= 18
//     ? "You can consume alcoholic drinks ! "
//     : "You are not allowed to consume alcoholic drinks!!!";
// // if (age < 18) {
// //   console.error("You are not allowed to consume alcoholic drinks!!!");
// // } else if (age >= 18) {
// //   console.log("You can consume alcoholic drinks ! ");
// // }

// console.log(response);

// let age;
// do {
//   age = +prompt("Please enter your age!");
// } while (isNaN(age));
// let response =
//   age >= 18
//     ? "You can consume alcoholic drinks ! "
//     : "You are not allowed to consume alcoholic drinks!!!";
// console.log(response);

//? CHALLENGE2: Kullanici adi ve parola kontrolü yap, dogru ise ismiyle karsila degilse tekrar girmesi cin yönlendir. 3 kez yanlis giris olursa cikis yapacagi kodu yazdir.

// let user = "Mark";
// let password = "1234";

// let loginCount = 3;

// while (loginCount > 0) {
//   let userid = prompt("Kullanıcı adınızı girin:");
//   let userpw = prompt("Parolanızı girin:");

//   if (userid === user && userpw === password) {
//     alert(`Merhaba, ${userid}! Sayfamıza hoşgeldiniz.🎉:tada:`);
//     break;
//   } else {
//     loginCount--;
//     if (loginCount > 0) {
//       alert(
//         `Kullanıcı adı veya parola yanlış girdiniz. Kalan giriş hakkı: ${loginCount}`
//       );
//     } else {
//       alert("Giriş hakkınız kalmadı.Güle güle..");
//     }
//   }
// }

//? Asagidaki ciktiyi yazdiriniz.

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for (let i = 0; i < 5; i++) {
//   let satir = "";
//   for (let j = 0; j < 5; j++) {
//     satir += "* ";
//   }
//   console.log(`${satir}`);
// }

//? Asagidaki ciktiyi yazdiriniz.

// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// //? Kullanicidan alinan 5 adet sayinin ortalamasini yazdirin.

// let sum = 0;
// for (var i = 1; i <= 5; i++) {
//   let sayi = +prompt(i + ". sayiyi girin:");
//   sum += sayi;
// }
// let ort = sum / 5;
// console.log("Ortalama: " + ort);

//? 1000 ile 2000 arasindaki hem 3 hem 5 e bölünen sayilari konsola yazdir.

let sayac = 0;
for (let num = 1000; num <= 2000; num++) {
  if (num % 3 == 0 && num % 5 == 0) {
    sayac++;
  }
  console.log(sayac);
}
