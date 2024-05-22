let sayi = 45;
console.log(typeof sayi);

// primitive data types
// Number, string, null, undefined, boolean, bigInt

// bigInt- cok büyük sayilar icin kullanilir

/* ---------------------------------- */
/*               NUMBER               */
/* ---------------------------------- */

// number-negatif,ppozitif ya da ondalikli sayi degerleri

let x = 34;
let y = 89.45098;
console.log(typeof x);
console.log(typeof y);

// Math metodu

const pi = Math.PI;
console.log(pi);

// dairenin cevresini hesaplama
// cevre formülü 2*pi*r
let r = 6;
let cevre = 2 * Math.PI * r;
console.log(cevre);

// dairenin alanini hesaplama
// formül- pi*r2
// pi zaten yukarda sabit olarak tanimlandigi icin bu sekilde de yazabiliriz

let alan = pi * r * r;
console.log(alan);

// sayi yuvarlama
// round
let alan1 = Math.round(alan);
console.log(alan1);
console.log(Math.round(cevre));

// ceil- yukari yuvarlar (vs round-bucuktan asagisi ve yukarisini referans alir)

let sayi1 = 45.32234;
console.log(Math.ceil(sayi1));
console.log(Math.round(sayi1));

// floor-sayiyi asagi yuvarlar

let sayi2 = 45.99988;
console.log(Math.floor(sayi2));

// trunc- fonksiyonu, bir sayının tam kısmını alır ve ondalık kısmını atar. Pozitif sayılar için ondalık kısmı keser, negatif sayılar için ise sayıyı daha düşük bir tam sayıya yuvarlar.
// trunc() sayının ondalık kısmını atar, floor() ise her zaman aşağıya doğru yuvarlar. Bu iki yöntem arasındaki fark, özellikle negatif sayılarda farklı sonuçlar üretebilir.

// toFixed-verilen ondalikli sayinin kac basamagini göstermek istedigimizi belirler

console.log(sayi1.toFixed(2));

let urunFiyati = 273;
let indirimliFiyat = 277 - (277 / 99) * 17;
console.log(indirimliFiyat);
console.log(indirimliFiyat.toFixed(2) + "TL");

// Math.max-verilen degerler icindeki en büyük degeri bulur
// Math.min-verilen degerler icindeki en kücük degeri bulur

console.log(Math.max(34, 8, 98, 67, 2));
console.log(Math.min(5, 9, 46, 37, 58));

// random-ürün listesinin rastgele dagitilmasini saglar. her defasinda farkli sayi üretilir!!!

// rastgele sayi üretmek icin kullanilir
// 0-1 arasinda bir sayi üretir
console.log(Math.random());

// chaining metodu

let rastgeleSayi = Math.random();
console.log(rastgeleSayi);
let duzenlenmisHali = rastgeleSayi.toFixed(2);
console.log(duzenlenmisHali);

//math random ile 0-100 arasinda bir sayi bu sekilde uretilebilir

let rNumber = Math.random() * 100;
console.log(rNumber.toFixed(2));

// Math.pow (power)- bir sayinin kuvvetini almak icin kullanilir

console.log(Math.pow(5, 3));
// ya da
console.log(5 ** 3);

// Math.sqrt - bir sayinin karekökünü almak icin kullanilir

console.log(Math.sqrt(121));
console.log(Math.sqrt(56));
console.log(Math.sqrt(56).toFixed(2));
console.log(Math.sqrt(56).toFixed());
// toFixed icine bsy yazmazsan ondalik kismi atar
//toFixed MAth lib.den olmadigi icin islem sonrasi sayiyi string verir- islemin basina + operatörü ekleyerek sonucu number alabiliriz

/* ---------------------------------- */
/*              // STRING             */
/* ---------------------------------- */

let ad = "Javascript";
console.log(ad);

console.log(ad[4]);
console.log(ad[7]);

//escape characters
//* kacis karakterleri "\" ile tanimlanir

let deger = "Merhaba Ayse'nin ödevi";
console.log(deger);

//* \n yeni bir satira gcemeyi saglar
let siir = "Merhaba yeni gün\nNeden sisli bu hava";
console.log(siir);

//*\t tab islemi yapar-8 karakter bosluk birakir

let developer = "Fontend\tDeveloper";
console.log(developer);

//!String Birlestirme Yöntemleri
//1-concat metodu
let adi = "Ali";
let soyadi = "Guclu";
console.log(adi.concat(soyadi));

//2- + ile birlestirme
console.log(adi + soyadi);
console.log("Adiniz Soyadiniz:" + adi + soyadi);

//Template Literal Yöntemi

// Stringleri dinamik olarak kullanmayi saglar

/* ---------------------------------- */
/*               BOOLEAN              */
/* ---------------------------------- */

console.log(3 > 2);
console.log(3 < 2);
console.log(typeof true);
console.log(typeof false);

//sadece true ya da false degeri tutar

/* ---------------------------------- */
/*                NULL                */
/* ---------------------------------- */

console.log(typeof null);

/* ---------------------------------- */
/*              UNDEFINED             */
/* ---------------------------------- */

//
/* ---------------------------------- */
/*          TYPE CONVERSIONS          */
/* ---------------------------------- */
let a = 10;
console.log(typeof a);
let b = "5";
console.log(typeof b);

console.log("toplama", a + b);
console.log("cikarma", a - b);
console.log("carpma", a * b);
console.log("bölme", a / b);
// tipleri farkli, kendi mantigina göre islem yapiyor.güvenilir degil. o yüden cevirme yöntemleriyle islem yapilmali

console.log(a + Number(b));
// b yi number olarak kullan code u verip islem yaptiriyoruz

let c = Number(b);
let d = b;
console.log(typeof c);
console.log(typeof d);
console.log(b, c, d);

let e = "123.45";
console.log(parseInt(e));
console.log(parseFloat(e));

let f = 123.456;
let g = "123.456";

// asagidaki iki kod farkli tür sonuclar veriyor. 2. kodda stringe ceviriyor. concole da yazi rengi farkli
console.log(f);
console.log(f.toString());
