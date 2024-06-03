"use strict";

//console.log("helooo");
//require("./modules/module.js");

//!single function importu:
// const testFunctionImp = require("./modules/module");
// testFunctionImp();

//!multifunction importu:
//? 1-array olarak import:
//*array olarak import ederken, bizim importta cagirdigmiz siradan bagimsiz gönderilen siraya göre alir veriyi.
// const [test_A, test_B, test_C] = require("./modules/module");
// test_C();
// test_A();
// test_B();

//? 2-object olarak import:
//* object olrak import alirken, export edilen dosyada object kisminda "key" ne ise importta o key ile karsilamak zorundayiz. yoksa import gerceklesmez, hata aliriz. Key siralamasi önemli degil. Export objectindeki siralmayla import etmezsek bile import basarili olur. (-->array import)
// const { test_B, test_A, test_C, pi } = require("./modules/module");
// test_B();
// test_C();
// test_A();
// console.log(pi);

//?
