// ?                    FONKSİYONLAR

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:
//?Fonksiyonun tanımlanması

function yazdir() {
  console.log("e daha daha nasilsiniz?");
}

yazdir();

//*Örnek2:
//?Parametreli fonksiyon

function adYazdir(ad1, ad2, ad3) {
  console.log(ad1, ad2, ad3);
}

adYazdir("burak", "esra", "elif");
adYazdir("ömer", "saban", "fatma");

//*Örnek3:
//? Parametreli ve return lü fonksiyon

function yasHesapla(isim, tarih) {
  console.log(`Benim adim ${isim} ve ben ${2023 - tarih} yasindayim.`);
}

yasHesapla("fatma", 1990);
yasHesapla("emre", 1980);
yasHesapla("kagan", 1995);

//*Örnek4: Parametreli, return degerli
//tek-cift sorgulamasi

console.log(isEvenOdd(5));
console.log(isEvenOdd(6));
console.log(isEvenOdd(-4));

function isEvenOdd(sayi) {
  //   const sonuc = sayi % 2 == 0 ? "cifttir" : "tektir";
  //   return sonuc;

  return sayi % 2 == 0 ? "cifttir" : "tektir";
}

//*Örnek5: arguments keyword ü ile parametre karsilama

function sumAll() {
  //   console.log(arguments);
  //   console.log(arguments[0]);

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAll(25, 34, 56, 78, 12, 45, 67, 87, 23));
