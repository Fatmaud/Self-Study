"use strict";

//*OOP1*
//*------------------------------------------------*//
// const camelCaseNameObj = {
//   propertyName: "value",
//   methodName: function () {
//     return "this is a method";
//   },
// };

// console.log("full>>", camelCaseNameObj);
// console.log("propertyName>>", camelCaseNameObj.propertyName);

//*------
// const Car = {
//   brand: "Toyota",
//   model: "Yaris",
//   year: 2020,
//   colors: ["red", "green", "gray", "yellow"],
//   startEngine: function () {
//     return "Engine Started";
//   },
//   details: {
//     color: "red",
//     engineSize: 3900,
//   },
// };

// console.log("all>>", Car);
// console.log("startEngine>>", Car.startEngine);
// console.log("carColor>>", Car.colors[0]);
// console.log("carColor>>", Car.colors[2]);
// console.log("sonRenk>>", Car.colors[Car.colors.length - 1]);
// console.log("engineSize>>", Car.details.engineSize);
// console.log("engineSize>>", Car.details["engineSize"]); //üstteki kodla ayni
// console.log("engineSize>>", Car["startEngine"]());//bu sekilde fonksiyonu calistirdik. parantezleri eklemek sart

//*------
// const user = {
//   name: "Test",
//   surname: "User",
//   fullName: function () {
//     return this.name + " " + this.surname;
//   },
// };
// console.log("all>>", user);
// console.log("fullName>>", user.fullName());

//?Array Destructuring
// const colors = ["black", "blue", "white", "yellow", "red", "green"];
// console.log(colors);

// const color_1 = colors[0];
// console.log(color_1); //==console.log(colors[0]);
// const color_2 = colors[1];
// console.log(color_2);
// console.log(color_1, ",", color_2);

// const [a, b, c, d, z, e] = colors;
// console.log(a, b, c, d, z, e);

// const [colorOne, colorTwo, ...colorList] = colors;
// console.log(colorList);

// const newColors = [...colorList, "gray"];
// console.log(newColors);

//?Object Destructuring --bu kismi tamamla

// const home = {
//   name: "Test Home",
// };

// const user = {
//   name: "Test",
//   surname: "User",
//   birthDay: 1987,
//   car: {
//     brand: "Toyota",
//   },
// };

// const { name } = user;
// console.log(name); //

// const { name: adi } = user;
// console.log(name, adi);

//?Rest Opr.ile Object Birlestirme-Olusturma
// const Car = {
//   brand: "Toyota",
//   model: "Corolla",
// };

// const Detail = {
//   year: 2011,
//   color: "red",
// };

// const CarDetail = {
//   ...Car,
//   ...Detail,
// };

// console.log(CarDetail);

// const newCarDetail = {
//   ...CarDetail,
//   gear: "automatic",
// };
// console.log(newCarDetail);

// //?Object to JSON
// const json = JSON.stringify(newCarDetail); //object i stringe cevirdik. artik object icinde dolasamayiz-- "json.gear" calismaz.
// console.log(json);

// //?JSON to Object
// const obj = JSON.parse(json); //json stringini objecte cevirdik
// console.log(obj);
// console.log(obj.gear);

// //?Object to Array
// //&Keys
// const keysInArray = Object.keys(newCarDetail);
// console.log(keysInArray);

// //&Values
// const valuesInArray = Object.values(newCarDetail);
// console.log(valuesInArray);

// //&Keys&Values Array
// const objInArray = Object.entries(newCarDetail);
// console.log(objInArray);

//*-----Object Consructor--------*//
const ConstructorFunction = function () {
  this.property = "value";
};
//?New Keyword
const CarConstructor = function (brand, model, year = 1973) {
  (this.brand = brand),
    (this.model = model),
    (this.year = year),
    (this.fullText = function () {
      return this.brand + " " + this.model + " " + this.year;
    });
};

const NewCar = new CarConstructor("Toyota", "Corolla");
console.log(NewCar);
