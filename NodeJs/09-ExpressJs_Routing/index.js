"use strict";

require("dotenv").config();
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

// npm i express
const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.all("/", (req, res, next) => {
//   console.log("req>>", req);
//   next();
// });

// app.get("/", (req, res) => {
//   res.write("GET method is called");
//   res.send(); //?Listeleme ve bilgi almak icin
// });
// app.post("/", (req, res) => {
//   res.write("POST method is called");
//   res.send(); //?yeni kullanici veya bilgi kaydetmek icin
// });
// app.put("/", (req, res) => {
//   res.write("PUT method is called");
//   res.send(); //?bilgi güncellemek icin
// });
// app.patch("/", (req, res) => {
//   res.write("PATCH method is called");
//   res.send(); //?bilgi güncellemek icin--put tan daha güvenilirdir.daha cok tercih edilir
// });
// app.delete("/", (req, res) => {
//   res.write("DELETE method is called");
//   res.send();
// });

// app.get("/", (req, res) => {
//   res.send({ message: "GET method is called" });
// });
// app.get("/women/dress(es)?", (req, res) => {
//   console.log(req.url);
//   res.send({ message: "GET method is called (women dress(es))" });
//   //http://127.0.0.1:8000/women/dresses
// });

//? REGEX
// https://www.geeksforgeeks.org/how-to-setup-regex-for-expressjs-router-url-in-node-js/
//app.get(/test/, (req, res) => {res.send('GET method called')}) // içinde test olmalı
// http://127.0.0.1:8000/aatestyy000
// http://127.0.0.1:8000/testyy000
// http://127.0.0.1:8000/test

//app.get(/test$/, (req, res) => {res.send('GET method called')}) // test ile bitmeli
//http://127.0.0.1:8000/test
//http://127.0.0.1:8000/dcdxzczxatest

// Route which matches /abc or /adc
// router.get(/\/a[b|d]c/, (req, res) => {
//     res.send("<h1>Route First</h1");
// })

//?URL PARAMS
app.get("/:userId/:productId", (req, res) => {
  const { userId, productID } = req.params;
  console.log(userId, productID);
  res.send(req.params);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`);
});
