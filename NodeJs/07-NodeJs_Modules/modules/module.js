"use strict";

console.log("module folder");

// //!single function:
// const testFuction = function () {
//   console.log("this is a test fuction");
// };
// module.exports = testFuction;

//*Tek fonksiyonu kisayolla da export edebiliriz:
// module.exports=function(){
//     console.log("this is a test fuction");
// }

// //!multi function:

const testFunctionA = function () {
  console.log("this is test fuction A");
};
const testFunctionB = function () {
  console.log("this is test fuction B");
};
const testFunctionC = function () {
  console.log("this is test fuction C");
};

// //? 1-array olarak gönderme:
// module.exports = [testFunctionA, testFunctionB, testFunctionC];

// //? 2-object olarak gönderme:
// module.exports = {
//   test_A: testFunctionA,
//   test_B: testFunctionB,
//   test_C: testFunctionC,
//   pi: 3.14,
// };

// //? shorthand 1:
// module.exports.testFunction_A = function () {
//   console.log("this is test function A");
// };
// module.exports.testFunction_B = function () {
//   console.log("this is test function B");
// };
// module.exports.testFunction_C = function () {
//   console.log("this is test function C");
// };
// module.exports.message = "hello";

// //? shorthand 2: tek bir
// module.exports = {
//   testFunction_A: function () {
//     console.log("this is test function A");
//   },
//   testFunction_B: function () {
//     console.log("this is test function B");
//   },
//   testFunction_C: function () {
//     console.log("this is test function C");
//   },
//   message: "hello",
// };
