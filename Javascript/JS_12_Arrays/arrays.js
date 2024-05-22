// const car = ["Ford", "Fiat", "BMW"];
// console.log(car);

// car[3] = "Mercedes";
// console.log(car);

// console.log(car[car.length - 1]);
// console.log(car[car.length - 2]);

// console.log(typeof car);
// console.log(Array.isArray(car));

// console.log(car instanceof Array);

// const fruit = ["Elma", "Kivi", "Portakal"];
// const fruit1 = ["Elma", "Kivi", "Portakal"];

// console.log(fruit == fruit1);
// console.log(fruit === fruit1);

// const fruit2 = fruit;

// console.log(fruit2 === fruit); //Yeni bir array tanimlamadik.fruit i fruit 2 ye atadigimiz icin esit cikti.

// fruit[3] = "Armut";
// console.log(fruit);
// console.log(fruit2); //atama yaptigimiz icin ilk arrayde yapilan tüm degisiklikler atama yapilan arrayde de gerceklesir.

// let birthYear = 2000;
// let color = "red";

// const arr = [color, 2024 - birthYear];
// console.log(arr);
// const arr2 = [color, "Bir", [1, 2, 3, true], arr, {}];
// console.log(arr2);

// console.log(arr2[2]);
// console.log(arr2[2][2]); //array icindeki array in bir elementine ulastik

// arr2[2][4] = arr2;
// console.log(arr2[2][4]);
// console.log(arr2);

//! Array Methods
//^1)SLICE---slice(start,stop)----
//^----->immutable,
//^----->negatif deger de alabilir

// const colors = ["red", "green", "blue", "yellow", "brown"];

// const colors2 = colors.slice(); //parametre vermezsek tüm arrayi kopyalar

// console.log(colors2);

// colors[5] = "white";
// console.log(colors);
// console.log(colors2); //atama islemi gibi degil, slice yapilan arraydeki degisikliklerden etkilenmez

// const colors3 = colors.slice(2); //2. parametereyi vermezsek ilk parametrenin verilen degerinden itibaren sonuna kadar alir.
// console.log(colors3);

// const colors5 = colors.slice(-2); //negatif indexle eleant cagirip alabilir
// console.log(colors5);

// console.log(colors.slice(-4, -1)); //soldan saga degerler yazilmali.
// console.log(colors.slice(-2, -4)); //sagdan sola calismadigi icin bos array döndürür.
// console.log(colors.slice(2, -2)); //hem negatif hem pozitif degeri ayni anda alabilir

//^2)PUSH---push()----adds a new element to the end of an array
//!^----->clg ile fonksiyon olarak yazdigimizda yeni arrayin eleman sayisini return eder
//^------> mutable, orjinal array degisir
//^------> clg a push u array ismi ile yeni eleman yazmadan bos "()" yazdirdigimizda bize array in uzunlugunu return eder

// const colors = ["red", "green"];
// colors.push("blue");
// console.log(colors);
// console.log(colors.push());
// console.log(colors.push("yellow")); //yeni element eklenmis haliyle array length i döndürdü
// console.log(colors); //yellow eklendi

// const colors2 = ["blue", "yellow"];
// console.log(colors.push(colors2)); //yeni array 5 elemanli--- icine eklenen arrayi 1 elemen olarak sayiyor
// console.log(colors);

//^3)POP---pop()---removes the last element of the array
//!^----->clg ile fonksiyon olarak yazdigimizda silinen elementi return eder
//^------> mutable, orjinal array degisir

// const colors = ["blue", "yellow", "red", "green"];
// const removedItem = colors.pop();
// console.log(colors);
// console.log(removedItem);
// console.log(colors.pop());

//^4)UNSHIFT---unshift()---adds one or more elements to the beginning of an array ((!vs. PUSH))
//^-----> returns the new length of the array
//^------> mutable, orjinal array degisir

// const arabalar = ["x", "y", "z"];

// const n1 = arabalar.unshift("t");
// console.log(arabalar, n1);

// const colors = ["blue", "yellow", "red", "green"];
// colors.unshift("grey", "white");
// console.log(colors);

// const newLen = colors.unshift("purple");
// console.log(newLen);

// const colors2 = ["aqua", "fushia"];
// colors.unshift(colors2);
// console.log(colors);

//^4)SHIFT---shift()---removes the first element of an array (//!vs.POP)
//^-----> returns the removed element
//^------> mutable, orjinal array degisir

// const w = arabalar.shift();
// console.log(arabalar, w);

// const colors = ["blue", "yellow", "red", "green"];
// const remColor = colors.shift();
// console.log(colors);
// console.log(remColor); //sildigi degeri döndürdü

//^4)SPLICE---splice(start,deleteCount, insert)---3 islem yapar:
//^----->removes the existing elements
//^----->replaces the existing elements
//^----->adds new elements in-place
//^----->returns an array containing the elements that were deleted.

// console.log(arabalar); //x,y,z
// arabalar.splice(1, 1, "t");
// console.log(arabalar);

// const colors = ["blue", "yellow", "red", "green"];

// colors.splice(1); //ikinci parametreyi vermezsek, verilen parametreden itibaren sagdaki elementlerin hepsini siler
// colors.splice(0);
// console.log(colors);

// colors.splice(0, 0, "white");
// console.log(colors);
// colors.splice(3, 0, "pink", "black");
// console.log(colors);

//^5)CONCAT---concat()---ekleme/birlstirme islemi yapar
//^-----> immutable-orjinal arrayi degistirmez

// const colors = ["blue", "yellow", "red", "green"];
// const colors1 = ["black", "purple"];
// const colors2 = [10, true];

// console.log(colors.concat(colors1, colors2)); // array birlestirirken array elemenlerini acarak gösterir.

//^6)indexOf()---returns the position of a specified element in the array
//^----->soldan saga dogru aramaya baslar, ilk bulunan elementin indeksini döndürür.
//^----->ikinci parametre opsiyoneldir, verilirse aramaya o indeksten baslar.

//^7)lastIndexOf()---sagdan sola dogru aramaya baslar, ilk bulunan elementin indeksini döndürür.
//^----->both return -1 if the element is not found
//^----->both are case sensitive

// const colors = ["blue", "green", "yellow", "red", "green"];

// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("green", 2));
// console.log(colors.indexOf("Green"));

// console.log(colors.lastIndexOf("green"));
// console.log(colors.lastIndexOf("green", 2));
// console.log(colors.lastIndexOf("Green"));

//^7)REVERSE---reverse()---reverses the array and mutates the array in place
//^------> mutable, orjinal array degisir

// const colors = ["blue", "yellow", "red", "green"];
// console.log(colors.reverse()); // ==> ['green', 'red', 'yellow', 'blue']

//^8)JOIN---join()--- combines all the elements in an array to create a string
//^-----> eger parametre olarak bir separator verirsek o separator i kullanilir
//^-----> eger bos string i parametre olarak yazarsak aradaki noktalama isaretlerini ve/ya bosluklari siler
//^-----> immutable-orjinal arrayi degistirmez

// const colors = ["g", "r", "e", "e", "n"];
// console.log(colors.join()); //console.log(sayilar1.toString());
// console.log(colors.join(""));
// const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];
// console.log(sayilar1.join(" "));

//^9)SORT---sort()--- sayi, harf ve sembollerin ASCII tablosundaki degerine göre siralama yapar.
//^------> mutable, orjinal array degisir.
//^------> sayilari sort ederken icine fonksiyon yazarak azalan ya da artan (matematiksel) siralama yaptirabilirz

// const sayilar = [2, 3, 1, 111, 5, 7, 6];
// sayilar.sort();
// console.log(sayilar);
// console.log(sayilar.sort());
// const colors = ["g", "r", "e", "e", "n"];
// colors.sort();
// console.log(colors); //

// const arr = ["red", "blue", "Purple", "white", "orange"]; //['Purple', 'blue', 'orange', 'red', 'white']

// arr.sort();

// console.log(arr);

// const arr2 = [55, 5, 22, 23, 2, 11, 12, 1, 111];

// arr2.sort();
// console.log(arr2); //[1, 11, 111, 12, 2, 22, 23, 5, 55] */

// arr2.sort((a, b) => a - b); //Artan siralama
// console.log(arr2);
// arr2.sort((a, b) => b - a); //Azalan siralama
// console.log(arr2);
//^9)INCLUDES---includes()---array icinde aranan eleman varsa true yoksa false return eder.
//^------> case sensitive

// const colors = ["blue", "yellow", "red", "green"];

// console.log(colors.includes("green"));
// console.log(colors.includes("Green"));

// let checkElement = (element) => {
//   if (!colors.includes(element)) {
//     colors.push(element);
//     console.log(`${element} diziye eklendi`);
//     console.log(colors);
//   } else {
//     console.log(`${element} zaten var!`);
//     console.log(colors);
//   }
// };

// checkElement("green");
// checkElement("Green");

//?ÖRNEK: Her cagirildiginda arrayin icinden rastgele bir eleman secen bir fonksiyon yazdirin.

// const colors = ["Red", "Green", "Blue", "Green", "Brown"];

// const randomSelect = function (bckColor) {};

//^ÖRNEK: NH
//prompt ile consoledan istediginiz sayi dizi icinde yer aliyorsa indexini (string veya number olarak) yazdirin. Bulunmadiysa 'aranilan bulunmamistir' yazdirin

// const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];
// const sayi = prompt("bir sayi giriniz:");

// if (sayilar1.includes(sayi)) {
//   console.log(sayilar1.indexOf(sayi));
// } else {
//   console.log(`${sayi} bulunmamistir`);
// }

//^10)EVERY
const yasArray = [18, 22, 34, 78, 81];
const check = yasArray.every((yas) => yas >= 18);
check
  ? console.log("dizideki herkes resit")
  : console.log("bebeleri pistten alalim");
