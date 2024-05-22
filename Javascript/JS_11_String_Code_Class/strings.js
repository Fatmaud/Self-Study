// "use strict";

// let str = "Hello";
// console.log(str.length);

// let str = `Hello World`;
// let uzunluk = (str) => {
//   return str.length;
// };

// for (let i = 0; i < uzunluk(str); i++) {
//   console.log(str[i]);
// }
console.log(uzunluk(str));

// //^ charAt()             Returns the character at the specified index.

// let lorem = `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved.`;
// console.log(lorem.length);
// console.log(lorem.charAt(200));
// console.log(lorem[200]);

// if (lorem.charAt(200) === `y`) {
//   console.log(`yes`);
// } else {
//   console.log(`no`);
// }

// //^charCodeAt()	        Returns the Unicode of the character at the specified index.

// let lorem1 = `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.`;

// console.log(lorem1.charCodeAt(0));
// console.log(lorem1.charCodeAt(19));

// //? Örnek: caesar cipher ==sezar sifrelemesi
// //string alacak ve ikinci parametre sayi olacak.o sayi kadar kaydirma yapacak.

// function ceaserCipher(str, shift) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let cipheredText = str.charCodeAt(i) + shift;
//     result += String.fromCharCode(cipheredText);
//   }
//   console.log(result);
// }
// console.log(ceaserCipher("Hello world", 3));

// //? Örnek: Sezar sifresini cözme
// //sifrelenmis metin ve sayi alip text in sifresini cöz.

// function ceaserCipher(str, shift) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let cipheredText = str.charCodeAt(i) - shift;
//     result += String.fromCharCode(cipheredText);
//   }
//   console.log(result);
// }
// console.log(ceaserCipher("Khoor#zruog", 3));

//^ concat()	            Joins two or more strings, and returns a new string.

// let lorem2 = `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.`;
// let lorem3 = `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.`;

// console.log(lorem2 + lorem3);
// console.log(lorem2.concat(" MERHABA ", lorem3));

// console.log("Hello ".concat("World!"));

//^ indexOf()	        Returns the index of the first occurrence of the specified value in a string.
//^ startsWith()	    Checks whether a string begins with a specified substring.
//^ endsWith()	        Checks whether a string ends with a specified substring.

// let lorem4 = `Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.`;
// console.log(lorem4.startsWith("Lorem"));
// console.log(lorem4.startsWith("Lorem", 1));
// console.log(lorem4.startsWith("Lorem", 1));
// console.log(lorem4.startsWith("sometimes", 13));

// console.log(lorem4.indexOf("sometimes"));
// console.log(lorem4.indexOf("xyz")); //-1, aranan metin belirtilen string icinde yoksa -1 döner

// console.log(lorem4.endsWith("content."));
// console.log(lorem4.endsWith("Ipsum", 11));

// //? Örnek: Verilen uzun text icindeki istenilen metnin bulundugu tüm indexleri yazdiran fonksiyon
// let lrm =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// function indexBul(str, char) {
//   let index = 0;

//   if (str.indexOf(char, index) == -1) {
//     console.log(`Metin icinde ${char} bulunamadi`);
//     return;
//   }

//   while (str.indexOf(char, index) !== -1) {
//     console.log(str.indexOf(char, index));
//     index = str.indexOf(char, index) + 1;
//   }
// }

// indexBul(lrm, "dummy");
// indexBul(lrm, "e");

// //&Alternatif
// let lorem =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// function findIndexesOfLetter(str, char) {
//   let indexString = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       indexString += str.indexOf(char, i) + ", ";
//     }
//   }
//   return indexString;
// }
// console.log(findIndexesOfLetter(lorem, "e"));

//^ fromCharCode()	    Converts Unicode values to characters.
//^ includes()	        Checks whether a string contains the specified substring.

// let lorem =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// console.log(lorem.includes("simply"));
// console.log(lorem.includes("simplY")); //case sensitive
// console.log(lorem.includes("Ipsum", 7));

// let email1 = "mark.m@clarusway.com";

// if (email1.includes("@")) {
//   console.log("valid email");
// } else {
//   console.log("invalid email");
// }

// //^ lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// let lorem =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// console.log(lorem.lastIndexOf("e"));
// console.log(lorem.lastIndexOf("e", 55));

//^ slice()	            Extracts a portion of a string and returns it as a new string.

//^ substring()	        Extracts the part of a string between the start and end indexes.

// let lorem =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// console.log(lorem.slice());

//^ toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
//^ toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
//^ toLowerCase()	    Converts a string to lowercase letters.
//^ toUpperCase()	    Converts a string to uppercase letters.

//?Örnek: Pangram
let TR = "Pijamali hasta yagiz soföre cabucak güvendi";
let US = "The quick brown fox jumps over the lazy dog";
let DE = "Viktor jagt zwölf Boxkämpfer quer über den größen Styler Deich";

console.log(TR.toUpperCase());
console.log(TR.toLocaleUpperCase("TR"));
console.log(US.toUpperCase());
console.log(DE.toUpperCase());
console.log(DE.toLocaleUpperCase("DE"));

//^ localeCompare()	    Compares two strings in the current locale.^

//^ trim()	            Removes whitespace from both ends of a string.
let str = " 1234 5678 9012 3456               ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

//?Örnek: Kredi Karti Numarasi
// '1234-5678-9012-3456' bunun '123456******3456' ya dönüstür.

// //&1
// const creditCardNumbr = "1234-5678-9012-3456"; //'123456••••••3456'

// const veiledCardNumber = (numberStr) => {
//   return (
//     numberStr.split("-").join("").slice(0, 6) + "******" + numberStr.slice(-4)
//   );
// };
// console.log(veiledCardNumber(creditCardNumbr));

// //&2

// let CardNumber = "1234-5678-9012-3456";
// const creditCardNumber = (numbers) => {
//   let result = numbers.replaceAll("-", "");
//   return result.replace(result.slice(6, 12), "******");
// };
// console.log(creditCardNumber("1234-5678-9012-3456"));

// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// split()	            Splits a string into an array of substrings.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.

// toString()	        Returns a string representing the specified object.

// valueOf()	        Returns the primitive value of a String object.
