//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )

class Book {
  constructor(a, b, c) {
    this.title = a;
    this.author = b;
    this.year = c;
    this.summaryFunction = function () {
      return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir. `;
    };
  }

  yilHesapla() {
    return 2024 - this.year;
  }
}

//?OVERRIDING

class Dergi extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;

    //overriding yaptigimiz fonksiyon:
    this.summaryFunction = function () {
      return `${this.author} wrote the book ${this.title} in ${this.year}.`;
    };
  }

  //!overriding yapilan fonksiyon:
  yilHesapla() {
    return `${this.title} 'in yazildigi yil bilinmemektedir.`;
  }
}
const dergi = new Dergi("scientific essays", "einstein", 1900, "eylül");
console.log(dergi);
console.log(dergi.summaryFunction());
console.log(dergi.yilHesapla());
