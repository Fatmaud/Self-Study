console.log("****STRING METHODS****");

//*1 Klasik Yöntem (bu yöntemle tanimlanan string primitivedir)

const str1 = "Clarusway ";
const str2 = "Hello";
const str3 = "World";

console.log(str1 + str2, typeof (str1 + str2));

//*2 String constructor ile (bu yöntemle tanimlanan String non-primitive dir)

const str4 = new String("yeni bir string");
console.log(typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

//~STRING YAPISI VE INDEXLEME

let course = "clarusway";
console.log(course[0]);
console.log(course[4]);
console.log(course.length);

course[2] = "A";
console.log(course); //IMMUTABLE===stringlerin icine girip belli bir harfi degistiremeyiz. Primitive data tipi.
//Bunu arraylarde yapabiliyoruz.

course = "fullstack"; //tabi ki stringlere yeni deger atayabiliriz.
console.log(course);

//*METHODS

// *=========================================================
// *              1. concat() immutable=değiştirmez
// *=========================================================

const s1 = "Hello ";
const s2 = "World!";
console.log(s1.concat(s2)); //concat tek bir islem, sadece o satiri etkiler; degiskenin degerini kalici degistirmez.
console.log(s1);

const s3 = s1.concat(s2); // concat ile yapilan islemin kalici olmasi icin islemi yeni bir degiskene tanimlamamiz gerekir.
console.log(s3);

// *=========================================================
// *  2. toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

const myName = "Ashley Miller";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.toLocaleUpperCase("TR")); //Türkce laratkterlin büyük harfe dönüstürülmesi icin .localeUpperCase("tr")

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const isEqual = (str1, str2) =>
  str1 == str2.toLocaleUpperCase("tr") ? "esittir" : "esit degildir";

console.log(isEqual("İSMET", "ismet"));

// *=========================================================
// *  3. charAt()
// *=========================================================

const s4 = "\t primitive \n veri tiplerinin property ya da methodu olmaz."; // "\t" yaziyi 8 karakter icerden baslatir.
//--------------// "\n" yaziyi alt satira indirir.

console.log(s4);
console.log(s4.charAt(5));
console.log(s4.charAt(s4.length - 1));

// *=========================================================
// *   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const word = "to be or not to be, that's The matter!";

console.log(word.toLowerCase().includes("TO BE"));
console.log(word.includes("to be"));
console.log(word.includes("the"));
console.log(word.includes("The"));
console.log(word.includes("  "));
console.log(word.includes("to be", 4));
console.log(word.includes("to be", 14));

// *=========================================================
// *   indexOf()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const word1 = "to be or not to be, that's The matter!";

console.log(word1.indexOf("be"));
console.log(word1.lastIndexOf("be"));
console.log(word1.indexOf("the"));

console.log(word1.indexOf("be", 4));
console.log(word1.indexOf("be", word1.indexOf("be") + 1));

// *=========================================================
// *   search()
// *=========================================================

const word2 = "to be or not to be, 5 that's The matter!";

//! REGEX = regular expression

console.log(word2.search(/[A-Z]/));
console.log(word2.search(/[0-9]/));

//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------

const word4 = "Salina salina sinsice, olurum sana!";

console.log(word4.startsWith("sa"));
console.log(word4.startsWith("Sa"));
console.log(word4.endsWith("!"));
console.log(word4.endsWith("sana!"));

console.log(word4.startsWith("salina", 7)); //true --- 7.karakter ile baslar, 7 dahil degil
console.log(word4.endsWith("salina", 13)); //true --- 13. arakter ile baslar, 13 dahil degil

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku = "Oku Johny gibi saf olma saf olma saf olma";

console.log(oku.replace("saf olma", "basarili ol")); //sadece bu satir icin degistirir.

oku = oku.replace("saf olma", "basarili ol");
console.log(oku); //degiskene kendisini yeni degisken olarak atadigimiz icin kalici degisti

console.log(oku.replace(/SAF/i, "fakir"));

console.log(oku.replace(/saf olma/gi, "zengin ol"));

//?REPLACE ALL

let oku2 = "Oku Johny gibi saf olma saf olma saf olma";
console.log(oku2.replaceAll("saf olma", "akilli ol"));

//* ----------------------------------------------------------
//!  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel = "UZUN INCE BIR YOLDAYIM YÜRÜYORUM GÜNDÜZ GECE";

console.log(veysel.slice(10));
console.log(veysel.slice(17, 21));
console.log(veysel.substring(17, 21));

console.log(veysel.slice(-10)); //sondan saymaya baslayinca 1,den basliyoruz.
console.log(veysel.slice(-10, -6));

console.log(veysel.substring(veysel.length - 4));
console.log(veysel.slice(veysel.length - 4, veysel.length - 2));

//! substring de -index calismaz
console.log(veysel.substring(-10));

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalim";
console.log(tarkan.split());
console.log(tarkan.split(" "));
console.log(tarkan.split(""));
console.log(tarkan.split("e", 3)); //olusturulan dizinin ilk 3 elemanini alir

//^ÖRNEK:
let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";

console.log(months.split("/"));

let date = "16.01.2024";
console.log(date.split("."));

console.log(`Bugün ayin ${date.split(".")[0]} sidir.`); // --date.split(".")-- ile string i array e cevirdik. split e degisken atayip onu da kullanabilirdik, ama direkt o kodu yazarak da 16 ya ulasabilirz.

//^ÖRNEK:

let liste = "Harry Trump; Fred Barney; Helen Rigby; Bill Abel; Chris Hand";

console.log(liste.split(";", 3));

let yeniListe = liste.split(";"); //-- string methodunu kullandigimiz string i array olarak yeni bir degiskene tanimladik.
console.log(yeniListe);

//!join ile tekrar diziyi string e ceviriyoruz.

console.log(yeniListe.join()); //default olarak virgülle stringe cevirir.
console.log(yeniListe.join("-")); //elemanlari - ile ayirdik

//! reverse metodu ile bir diziyi tersten yazdirabiliriz.

let terstenoku = "ey edip adanada pide ye";

let tersten = terstenoku.split("").reverse().join("");
console.log(tersten);

if (terstenoku === tersten) {
  console.log("selam cümlesi polindrom bir cümledir");
} else {
  console.log("selam cümlesi polindrom degildir");
}

//* trim

const ramazan = "          Hosgeldin ya Sehr-i Ramazan      ";
console.log(ramazan);
console.log(ramazan.length);
console.log(ramazan.trim());
console.log(ramazan.trim().length); //trimledikten sonraki uzunlugu bulmak icin

//^ÖRNEK:

//*chaining

let abc = "       Clarusway Full Stack";
console.log(abc.trim().slice(0, 9).toUpperCase());
