//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
  constructor(a, b, c) {
    this.title = a;
    this.author = b;
    this.year = c;
    this.summaryFunction = function () {
      return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir. `;
    };
  }

  //?bu alt süslüyle yazdiklarimiz direkt kalibin prototype alanina gider (ES06 ile, biz belirtmeden)
  yilHesapla() {
    return 2024 - this.year;
  }
}

const book1 = new Book("safahat", "M.Akif Ersoy", 1910);

console.log(book1);
console.log(book1.yilHesapla());

//?INHERITANCE

class Dergi extends Book {
  constructor(author, title, year, d) {
    // 'super' keyword u ile atadan alinanlar:
    super(author, title, year);

    //class in kendine ait özellikler:
    this.month = d;
  }
}

const dergi1 = new Dergi("kasagi", "Ömer Seyfettin", 1915, "aralik");

console.log(dergi1);

//! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayız, en fazla value kısmını boş " " bırakabiliriz
