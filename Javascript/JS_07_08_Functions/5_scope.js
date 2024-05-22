let number1 = 11; //?global-scope da
const func1 = () => {
  let number1 = 44; //?function-scope da
  number1++;
  return number1;
};
console.log(func1());

number1 = func1(); //?func1 fonksiyon icindeki number1 degerini aldi. global-scopedaki number1, func1() e esitleyince 45 oldu.

{
  number1++;
  let x = 5;
  x++;
  let y = x + 15;
  console.log(y);
}
console.log(number1);

//? var

number2 = 99;
var number2; //?hoisted (atamayi kendi scope unda en üste tasidi?)

console.log(number2);

var result = "Hallo!";

if ((number2 = 100)) {
  let result = "Hi!";
  console.log(result); //?local
} else {
  result = "Salut";
  console.log(result); //?global
}
console.log(result); //?global
