//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

// const car = {
//   title: "BMW",
//   model: 1990,
//   engine: 1.6,
// };

// // *1. Yöntem
// console.log(car.engine);
// console.log(car["engine"]);

// // *2. Yöntem: Destructuring
// const { title, model } = car;
// console.log(title);

// const arabalar = {
//   car1: {
//     marka: "BMW",
//     model: 1990,
//     renk: "red",
//   },
//   car2: {
//     marka: "MERCEDES",
//     model: 1980,
//     renk: "white",
//   },
//   car3: {
//     marka: "AUDI",
//     model: 2000,
//     renk: "gray",
//   },
// };

// const { car1, car2, car3 } = arabalar;
// console.log(car1.marka);
// console.log(car2.model);

// const { marka, renk } = car1;
// console.log(marka);
// console.log(renk);

// const { marka: marka2, renk: renk2 } = car2;
// console.log(renk2);
// //!⬆️⬆️ car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik. ilk object i oluştururken key leri (marka,model..) farklı verebilirdik, bu sayede yeni isim vermekle uğraşmazdık, ama o zamanda for in ile dönerken her bir marka yı yazdır diyemezdik, çünkü car2 nin içinde mesela marka2 yazıyor olacağından, onu tanıyamazdı

// // *Object ler arasinda Gezinme

// for (const i in arabalar) {
// }

// const people = [
//   {
//     name: "Mustafa",
//     surname: "Gertrud",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "Halo",
//     surname: "Müller",
//     job: "tester",
//     age: 35,
//   },
//   {
//     name: "Mehmet",
//     surname: "Rosenberg",
//     job: "team lead",
//     age: 40,
//   },
//   {
//     name: "Ozkul",
//     surname: "Gutenberg",
//     job: "developer",
//     age: 26,
//   },

//   {
//     name: "Baser",
//     surname: "Shaffer",
//     job: "tester",
//     age: 24,
//   },
// ];

// //* Array-Object Gezinme:

// //* 1.yol:

// people.forEach((person) => {
//   // console.log(person.name);
//   // console.log(person.surname);

//   const { name, surname, job } = person;
//   console.log(name, surname);
//   console.log(surname);
//   console.log(job);
// });

// //* 2.yol:

// people.forEach(({ name, surname, job }) => {
//   console.log(name, surname);
// });

//?Fonksiyonlar object parametreleri destructuring yapabilir:

// const control = (objdata) => {
//   console.log(objdata);
//   console.log(objdata.name);

//   const { name, color, star } = objdata;
//   console.log(name);
// };

// control({ name: "GS", color: "yellow-red", star: 4 });
// control({ name: "FB", color: "yellow-blue", star: 3 });
// ///************* */
// const control2 = ({ name, color, star }) => {
//   console.log(name);
//   console.log(star);
// };
// control2({ name: "BJK", color: "black&white", star: 3 });

//* ======================================================
//*    NEW GENERATION OPERATORS: SPREAD and REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

// const personel = {
//   pName: "Johnny",
//   surname: "DEPP",
//   job: "actor",
//   age: 55,
// };

// const { pName, surname, ...gerisi } = personel;

// console.log(pName);
// console.log(surname);
// console.log(gerisi);

// //* OBJECT KOPYALAMA (rest ile)************

// const ikizPersonel = personel;
// console.log(ikizPersonel); //object i yeni bir degiskene atayarak orjinal diziyle ayni yeni bir dizi olusturduk.

// const { ...personel2 } = personel; // rest ile orjinal diziden farkli bir kopya olusturduk
// console.log(personel2);

// //***** orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu yüzden kopyada yapılan değişiklik orjinal diziyi de etkiledi */

// ikizPersonel.job = "father";
// console.log(personel);
// console.log(personel2);
// console.log(ikizPersonel);

// //*** orjinal diziden farklı bir kopya oluşturduğumuz için, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz*/
// personel2.age = 12;
// console.log(personel);
// console.log(personel2);
// console.log(ikizPersonel);

//* ARRAY KOPYALAMA *********
// const autos = ["anadol", "renault", "tofas", "ferrari"];

// const ikizAutos = autos; //bu islem aslinda kopya deil de assign etmek. bellekte tek bir yer kapliyor---o yüzden dizilerin birinde yapilan degisikliklikler digerinde de otomatik oluyor
// const [...autos2] = autos; //kopya- bellekte kendisi ayri yere sahip

// console.log(autos);
// console.log(ikizAutos);
// console.log(autos2);

//? ÖRNEK1:

//?ÖRNEK2:

const show = (name, surname, ...title) => {
  console.log(title);
  console.log(`${name}, ${surname} is a ${title.join(" and ")}`);
};

show("asiye", "yildiz", "developer", "mom", "teacher", "computer science");

//**************************

const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

const newPeople = people.map((person) => ({
  name: person.name,
  surname: person.surname,
  job: person.job,
  age: person.age + 5,
}));

console.log(newPeople);

//* SPREAD  objede değişmesini istemediğimiz elemanlar için ... kullanıyoruz ÖNEMLİ***!!!!!
const newPerson = people.map((person) => ({
  ...person,
  age: person.age + 5,
}));

console.log(newPerson);

//? ÖRNEK:

const zeug = ["Flugzeug", "Hubschrauber", "Fahrrad"];
const autos = ["LKW", "Bus", "Auto", "SUV"];

console.log(zeug, autos);
console.log(zeug.concat(autos));

console.log([...zeug, "otobüs", ...autos, "tir"]);

//? ÖRNEK:job:father olsun ve location:USA ekleyelim (spread ile yapalım) sonucu yeni bir diziye atalım

const personel = {
  pName: "Johnny",
  surname: "DEPP",
  job: "actor",
  age: 55,
};

const newPersonel = { ...personel, job: "father", location: "USA" };
console.log(newPersonel);
