//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

//*object literals

const book1 = {
  title: "Karamazov Kardesler",
  yazar: "Dostoyevski",
  year: "1980",
  summaryFunction: function () {
    console.log(
      `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir.`
    );
  },
};

console.log(book1);
book1.summaryFunction();

const book2 = {
  title: "Yaprak Dokumu",
  yazar: "Resat Nuri",
  year: 1950,

  summaryFunction: function () {
    console.log(
      `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır`
    );
  },
};

book2.summaryFunction();

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
// DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)
