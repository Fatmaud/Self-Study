// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

//?Sayma sayilarinin ilk 6 teriminin toplamini bulunuz.

const add = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

console.log(add(9));

//*recursive ile cözümü

// const sums = (n) => {
//   if (n < 1) {
//     return n;
//   } else return sums(n - 1) + n;
// };
// alert(sums(12));

//* ORNEK: Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.

console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//!fibonacci dizisindeki  n. terimi  bulma fonksiyonu

const fibo = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    fibo(n - 1) + fibo(n - 2);
  }
};
console.log(fibo(6));
