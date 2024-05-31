"use strict";
//!!----------
// const Car = class {
//   propertyName = "value"; //attribute, field
//   constructor(parametre1, parametre2 = "default-value") {
//     this.parametre1 = parametre1;
//     this.parametre2 = parametre2;
//   }
//   methodName() {
//     return this;
//   }
// };

// //?INSTANCE: Class'tan üretilen nesnelere denir.

// const InstanceName = new Car("test");
// console.log(InstanceName);
// console.log(InstanceName.methodName());
//!!--------

//! constructor() method

// class Car {
//   isRunning = false;
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   runEngine() {
//     this.isRunning = true;
//     console.log("Start Engine");
//     return this.isRunning;
//   }
// }

// const Ford = new Car("Ford", "Mustang", 1990);

// console.log(Ford);
// console.log(Ford.isRunning); //false
// Ford.runEngine();
// console.log(Ford.isRunning); //true

// const Mazda = new Car("Mazda", "323", 2000);
// console.log(Mazda.isRunning); //false
// Mazda.runEngine();
// console.log(Mazda.isRunning); //true

//? INHERITANCE: MirasAlma. Başka bir class'ın tüm özelliklerini devralma (parent-child ilişkisi kurma)
//* THIS = Child (current) Class
//* SUPER = Parent Class

class Vehicle {
  vehicleActive = false;

  constructor(vehicleType = true) {
    this.vehicleActive = vehicleType;
  }

  sayHello() {
    console.log("Hello");
  }
}

class Car =new Vehicle

/*
class Accessory extends Car {
    constructor(accessoryName, brand, model, year, vehicleType = true) {
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }
}

const fordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1993, false)
//console.log('all >>', fordClimate);
*/

/* --------------------------------------------- */
//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)

// class Vehicle {
//   vehicleActive = false;

//   constructor(vehicleType) {
//     this.vehicleActive = vehicleType;
//   }

//   getDetails() {
//     console.log("Vehicle/getDetails started.");
//     return this;
//   }

//   getType(vehicleType) {
//     //console.log('Vehicle type: ' + this.vehicleType)
//     console.log(`Vehicle type: ${this.vehicleType}`);
//   }
// }

// class Car extends Vehicle {
//   isRunning = false;

//   constructor(brand, model, year, vehicleType = true) {
//     super(vehicleType);
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine() {
//     this.isRunning = true;
//     console.log("Engine Started");
//     return this.isRunning;
//   }

//   getDetails() {
//     console.log("Car/getDetails started");
//   }

//   getType(vehicleType, brand) {
//     console.log(`Vehicle/Brand type ${vehicleType} ${brand}`);
//   }
// }

// const Mercedes = new Car("Mercedes", "M300", 2010, "Truck");

// //console.log(Mercedes);

// console.log(Mercedes.vehicleActive);

// Mercedes.getDetails();

// Mercedes.getType("Car");
// Mercedes.getType("Car", "Ford");
