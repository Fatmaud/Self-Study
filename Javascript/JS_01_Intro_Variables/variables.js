// global scope:
// Program icinde fonksiyonlarin disinda tanimlanan ve heryerden ulasilabilen alan

variableName = "Javascript";
variableNumber = 56;
console.log(variableName);

{
  // local scope: bir blok ici {} (fonksiyonlarin ici, döngü icleri ve if blok icleri)
  console.log("here is local scope");
}

/* ---------------------------------- */
/*          // var kullanimi          */
/* ---------------------------------- */

var x = 5;
x = 15;
console.log(x);

{
  console.log("i'm in local scope");
  x = 45;
  console.log(x);
}
console.log(x * 5);

/* ---------------------------------- */
/*           const kullanimi          */
/* ---------------------------------- */

// const=constant=sabit

// const ile local ile global de farkli degerler tanimlanirsa bu iki alan birbirini etkilemez. her iki alan kendi degerini varsayar.
// eger globalde bir deger tanimlarsan local globalden alir

const pi = 3.14;
const number1 = 15;

console.log(pi);

console.log("global scope:", pi);

{
  // const ile local scope da yaptigin degisiklik sadece local de gecerli olur.
  const pi = 3;
  console.log("local scope", pi);
  const number1 = 25;
  console.log(number1);
}
console.log(pi);

{
  console.log(pi);
}

/* ---------------------------------- */
/*            let kullanimi           */
/* ---------------------------------- */

let toplam = 0;
toplam = 25 + 15;
console.log(toplam);

{
  toplam = 40 + 25;
  console.log(toplam);
  toplam = 60;
  console.log(toplam);
}

console.log(toplam);
