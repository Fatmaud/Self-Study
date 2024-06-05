"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters.
//? Last parameter is for next().

// Middleware:

// app.get("/", (req, res, next) => {
//   console.log("MW");
//   res.send("Hello World!");
//   next();
// });

// app.get("/", (req, res, next) => {
//   console.log("MW");
//   res.send("Hello World!");
//   next();
// });

/*---------------------------------------------------*/

// app.get("/", (req, res, next) => {
//   console.log(req.query?.username);
//   if (req.query?.username === "clarusway") {
//     next();
//   } else res.send("Invalid username!");
// });

// app.get("/", (req, res) => {
//   console.log("hello world!");
//   res.send("Hello World!");
// });

/*----------------------------------*/
//?Functions
// const middlewareFunction = (req, res, next) => {
//   console.log("Middleware function is called");
//   next();
// };

// app.get("/", middlewareFunction, (req, res) => {
//   res.send("Welcome CW");
// });

//*-------------*/

// const middlewareFunctionOne = (req, res, next) => {
//   console.log("Middleware function 1 is called");
//   next();
// };
// const middlewareFunctionTwo = (req, res, next) => {
//   console.log("Middleware function 2 is called");
//   next();
// };

// app.get("/", middlewareFunctionOne, middlewareFunctionTwo, (req, res) => {
//   res.send("Welcome CW");
// });

//*---------------*/
// const middlewareFunctionOne = (req, res, next) => {
//   req.messageOne = "Middleware function 1 is called";
//   next();
// };
// const middlewareFunctionTwo = (req, res, next) => {
//   res.messageTwo = "Middleware function 2 is called";
//   next();
// };
// const middlewareFunctionThree = (req, res, next) => {
//   res.messageThree = "Middleware function 2 is called";
//   next();
// }; //Bu fonksiyonu digerlerinden farkli bir end pointle kullanmak icin, -arraye atamadan- yazdik.

// //fonksiyonlari arraya atayip methoda o arrayi paramaetreolarak da yazabiliriz. Fonksiyonlar cok olunca daha kullanisli.
// const middlewares = [middlewareFunctionOne, middlewareFunctionTwo];

// app.use(middlewares); //middlewares i her yerden (express icin) kullanima actik. Bu durumda methos icine parametre olarak yazmamiza gerek kalmiyor.⬇️⬇️⬇️

// app.get("/", (req, res) => {
//   res.send({
//     messageOne: req.messageOne,
//     messageTwo: res.messageTwo,
//     messageThree: res.messageThree,
//     messageEnd: "welcome clarusway",
//   });
// });
// app.get("/user", middlewareFunctionThree, (req, res) => {
//   res.send({
//     messageOne: req.messageOne,
//     messageTwo: res.messageTwo,
//     messageThree: res.messageThree,
//     messageEnd: "welcome clarusway",
//   }); //3.fonksiyon express in global use una acilmadigi icin mesaj3 de yapilan istek sonrasi respose da dönmez.
// });

/*----------------------------------*/

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`);
});
