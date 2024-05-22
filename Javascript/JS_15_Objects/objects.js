//! -------------------------------------------------------------------------- */
//!                                         OBJECTS                                  */
//! -------------------------------------------------------------------------- */

// Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
// const dizi = [1, 2, 3, 4, 5, 6];

// //! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

// //! Herhangi bir veriye erişim için property (key) adı kullanılır.

// /* -------------------------------------------------------------------------- */
// /*                       // Object Oluşturma Yöntemleri                       */
// /* -------------------------------------------------------------------------- */
// //^ ****OBJECT OLUSTURMA YÖNTEMLERI *****
// //^ 1. Object classindan Türetme

// const car = new Object(); //bos bir object olusturduk

// car.brand = "BMW";
// car.model = 1990;
// car.price = 10000;
// console.log(car);
// console.log(car.model);

// //************************** *//

// //^ 2. Constructor metodu ile object olusturma

// function personelList(a, b, c) {
//   this.id = a;
//   this.ad = b;
//   this.maas = c;
// }

// const personel1 = new personelList(1001, "Ali", 10000);
// const personel2 = new personelList(1002, "Osman", 10000);

// console.log(personel1);

// //Bu yöntem js de cok tercih edilmez. Cunku  her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını arttırabilir.

// //************************** *//

// //^ 3. OBJECT LITERAL ile Object Olusturma

// let personelYapisi = {}; //bos bir object tanimladik
// console.log(personelYapisi);

// let personel = {
//   name: "Fatma",
//   lastName: "Kara",
//   dateOfBirth: 1995,
//   isMarried: true,
//   experiences: ["tester", "developer", "devops"],
//   address: { city: "Izmir", town: "Bornova", street: "Lale Sok.", no: 5 },

//   calculateAge: function () {
//     return new Date().getFullYear() - this.dateOfBirth;
//   },

//   selam: () => {
//     return "Merhaba";
//   },
//   arrowFunction: () => {
//     return this.isMarried;
//   },
// };

// //Arrow function üretilirken this keyword ünden kurtulmak için yapılmıştır.
// // Arrow functionda this window objesine (global) karşılık gelir.
// // window objesi içinde isMarried isimli bir özellik bulamadığından undefined

// console.log(personel.name);
// console.log(personel.dateOfBirth);
// console.log(personel["dateOfBirth"]);
// console.log(personel.calculateAge());
// console.log(personel.selam());
// console.log(personel.arrowFunction()); //undefined

// console.log(personel.experiences[0]);

// console.log(personel.address.city);

// personel.experiences.forEach((work) => console.log(work));

// personel.phone = "555-34-34"; //yeni bir özellik/icerik ekledik

// console.log(personel);

// //^OBJECT METHODS

// //^ 1. ic ice (nested) object kullanimi

// let employeeList = {
//   person1: {
//     name: "Abdulkadir",
//     lastName: "Baki",
//     dateOfBirth: 1980,
//     salary: 20000,
//     job: "developer",
//   },

//   person2: {
//     name: "Elif",
//     lastName: "Akalin",
//     dateOfBirth: 1990,
//     salary: 20000,
//     job: "developer",
//   },

//   person3: {
//     name: "Esra",
//     lastName: "Bilgin",
//     dateOfBirth: 1985,
//     salary: 20000,
//     job: "devops",
//   },
// };

// console.log(employeeList.person3.name);
// console.log(employeeList["person3"].name);
// console.log(employeeList.person2.salary);

// // //? for of ve objects

// // for (const i of employeeList) {
// //   console.log(i)};
// // ! "employeeList is not iterable" hatasi aldik!

// //^ Objectin icinde var olan özellikler:

// console.log(Object.keys(employeeList)); // key lari alip bir arraye atayip yazdiriyor.

// console.log(Object.values(employeeList)); // value lari alip bir arraye atayip yazdiriyor.
// Bu yöntemle array döngülerini kullanabiliriz.

// for (const i of Object.keys(employeeList)) {
//   console.log(i);
// }

// for (const i of Object.values(employeeList)) {
//   console.log(i);
// } // bu iki yöntemde object array e dönüstürülerek yazdirildigi icin for of bu sekilde calistirilabilir.

// for (const i of Object.values(employeeList)) {
//   console.log(i);
//   console.log(i.lastName);
//   console.log(Object.values(i)[0]);
// } // bu sekilde array a döndügü icin index numarasiyla value cagirabildik

// // //? for in ve objects

// let numbersAndLetters = ["a", 4, 6, 7, "C"];

// for (const i in numbersAndLetters) {
//   console.log(i);
// } // elementlerin index numaralarini döndürdü

// for (const i in employeeList) {
//   console.log("for in ile", i);// keyleri döndürdü;bunu kullanmak yerine object.key kullaniliriz.
//   console.log(employeeList[i].job);
// }

// //!!!   employeeList.forEach((m)=> console.log(m.name)) // Objelerde map,forEach,filter,reduce kullanılmaz. JSon bir dizi içinde obje olduğu için dizi metodları map,filter,reduce,forEach kullanılabiliyor.

// //* -------------------------------------------------------------------------- */
// //* -------------------------------------------------------------------------- */
// //*                   JSON -Javascript Object Notation                  */
// //* -------------------------------------------------------------------------- */

// let employeeList1 = [
//   {
//     name: "Abdulkadir",
//     lastName: "Baki",
//     dateOfBirth: 1980,
//     salary: 20000,
//     job: "developer",
//   },

//   {
//     name: "Elif",
//     lastName: "Akalin",
//     dateOfBirth: 1990,
//     salary: 20000,
//     job: "developer",
//   },

//   {
//     name: "Esra",
//     lastName: "Bilgin",
//     dateOfBirth: 1985,
//     salary: 20000,
//     job: "devops",
//   },
// ];

// JSON ile farklı veri türleri barındırılabilir
// Dillerden bağımsızdır.
//nesnelerin (objelerin) temsil edilmesi için anahtar-değer çiftlerini kullanır. Bu, verilerin daha iyi organize edilmesini ve ilişkilendirilmesini sağlar.
//JSON, veri  işleme açısından hızlıdır. Bu nedenle web uygulamalarında ve servislerde yaygın olarak kullanılır.

//? JSON a yeni eleman ekleme:

// employeeList1.push({
//   name: "Nida",
//   lastName: "Güler",
//   dateOfBirth: 1995,
//   salary: 25000,
//   job: "devops",
// });
// console.log(employeeList1);

// employeeList1.forEach((t) => console.log(t.lastName));

//? ÖRNEK: employeeList1 dizisindeki name leri büyük harf yapip ekrana bastiriniz.

// let employeeList1 = [
//   {
//     name1: "Abdulkadir",
//     lastName: "Baki",
//     dateOfBirth: 1980,
//     salary: 20000,
//     job: "developer",
//   },

//   {
//     name2: "Elif",
//     lastName: "Akalin",
//     dateOfBirth: 1990,
//     salary: 20000,
//     job: "developer",
//   },

//   {
//     name3: "Esra",
//     lastName: "Bilgin",
//     dateOfBirth: 1985,
//     salary: 20000,
//     job: "devops",
//   },
//   {
//     name4: "Nida",
//     lastName: "Güler",
//     dateOfBirth: 1995,
//     salary: 25000,
//     job: "devops",
//   },
// ];

// employeeList1
//   .map((a) => Object.values(a)[0].toUpperCase())
//   .forEach((b) => console.log(b));
// employeeList1.map((a) => console.log(Object.values(a)));

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

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

console.log(people);

// //? 1. people dizisindeki joblari göster

// people.forEach((a) => console.log(a.job));

// //? 2. yaslari 1 er arttir, sonucu yeni diziye aktar.
// //-------->dizide degisiklik yapmak icin map uygun yöntem; map dizi olusturur.

// const ages = people.map((person) => person.age + 1);

// console.log(ages);
// console.log(people);

// //? 3. yaslari 1 er arttir ve sonucu dizide kalici degistir.

// people.map((person, index, people) => people[index].age++);
// // people.map((person, index, arr) => (arr[index].age = arr[index].age + 1));

// console.log(people);
// people.forEach((person) => console.log(person.age)); //forEach ile sadece yaslari da yazdirabiliriz

//? 4.  people (object li ) dizisinden yaşları 5 fazlasıyla değişmiş ve salary eklenmiş (diger elemanlari ayni kalacak) olarak yeni bir object li (keyleri degismis) dizi oluştur.

const newPeople = people.map((person) => ({
  adi: person.name,
  soyadi: person.surname,
  yas: person.age + 5,
  is: person.job,
  salary: 30000,
}));

console.log(newPeople);

//? 5. başharfi M olan elemanların name ini büyük harfli yaz, hepsinin yaslarını 2 kat yap, hepsinin job larının önüne senior kelimesi ekleyelim ve sadece bunları yeni bir diziye atalım

const updatePeople = people.map((person) => ({
  name: person.name.startsWith("M") ? person.name.toUpperCase() : person.name,
  age: person.age * 2,
  job: "senior " + person.job,
}));

console.log(updatePeople);

//? 6.ortalama yasi hesaplayiniz.

console.log(
  people.reduce((sum, person) => sum + person.age, 0) / people.length
);

//? 7. Developer olanların adlarını ve yaşlarını yeni bir object olarak saklayın

const newDev = people
  .filter((person) => person.job === "developer")
  .map((person) => ({ name: person.name, age: person.age }));
console.log(newDev);

//? 8. yası 33 ün üstünde olan kişilerin name lerini listele

const olderThan = people
  .filter((person) => person.age > 33)
  .map((person) => ({ name: person.name }));
console.log(olderThan);
