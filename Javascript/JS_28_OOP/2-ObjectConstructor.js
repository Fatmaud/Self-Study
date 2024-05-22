//* ======================================================
//*          OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//!arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik

function Book(a, b, c) {
  this.author = b;
  this.title = a;
  this.year = c;

  this.summaryFunction = function () {
    return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir. `;
  };
}

const book1 = new Book("karamazov kardesler", "dostoyevski", 1980);
const book2 = new Book("yaprak dokumu", "resat nuri guntekin", 1950);
console.log(book1, book2);
// console.log(book2.summaryFunction());
document.querySelector("h2").textContent = book2.summaryFunction();

//!kalıp ta (constructor) prototype alanına ulaşmak için alttaki gibi bir syntax kullanılır
//*Book un prototype alanına yeni bir parametre ekleyecegiz ama bellekte yer kaplamaz, ihtiyaç olunca child lar kullanır.⬇️⬇️⬇️

Book.prototype.tür = "roman1";
Book.prototype.yilHesapla = function () {
  return 2024 - this.year;
};

//? Prototype alanindaki veriler bellekte yer kaplamadi ama cagirinca da erisebildik.
console.log(book2.yilHesapla());
console.log(book1.tür);

//? INHERITANCE (okul yönetimi örnegini hatirla !)

function Dergi(title, author, year, d) {
  Book.call(this, title, author, year);
  this.month = d;
}

Dergi.prototype = Object.create(Book.prototype);

const dergi1 = new Dergi("Time", "Jonathan", 1960, "Eylül");

console.log(dergi1);
