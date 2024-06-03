"use strict";

console.log("hi");

//*NODE.JS SERVER*//

const http = require("node:http");

// const dotenv = require(dotenv);
//dotenv.config()
//-->kisayolu asagida
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
//http://localhost:8000 // domain
const HOST = process.env.HOST || "127.0.0.1";

//!Serverda hersey request le response arasinda olur.

//&Response mesajlari ile dönüs:
//  http
//   .createServer((req, res) => {
//     // console.log(req.method);//get

//     /*
//     "/"--home page
//     "/FS"--Fullstack page
//     "/DS"--Data Science page
//     "/CW/api"-- CW api page
//     */
//     if (req.url == "/") {
//       res.end("Welcome CW");
//     } else if (req.url == "/FS") {
//       res.end("Welcome FS");
//     } else if (req.url == "/CW/api") {
//       res.end("Welcome api page");
//     } else res.end(" <h1>no page</h1>");
//     //console.log("server is running");
//   })
//   .listen(PORT, () => console.log(`server runs http://${HOST}:${PORT}`));

//&Status Kodlari ile dönüs ve methos kontrolü:
//?Status mesajlarini istersek degistirebilliriz ama default un bozulmasi tavsiye edilmiyor!!!

//? *url=path*

http
  .createServer((req, res) => {
    //if (req.url == "/" && req.method == "GET") {
    if (req.url == "/") {
      if (req.method == "GET") {
        res.statusCode = 200;
        res.end("Welcome CW");
      } else {
        res.statusCode = 403;
        res.end("wrong CRUD method");
      }
    } else if (req.url == "/FS") {
      res.writeHead(200, "success", {
        myheader1: "comment1",
        mycomment1: "comment1",
      });
      res.write("welcome ");
      res.write("FullStack ");
      res.end("Welcome FS");
    } else if (req.url == "/DS") {
      const myObject = {
        username: "user",
        email: "email@cw.com",
      }; //Object olusturup response la server a object gönderiyoruz.Bunu JSON formatina cevirerek yapiyrz.
      //res.end("Welcome DS");
      res.end(JSON.stringify(myObject));
    } else if (req.url == "/CW/api") {
      res.end("Welcome api page");
    } else {
      res.statusCode = 404;
      res.statusMessage = "belki";
      res.end("<h1>no page</h1>");
    }
  })
  .listen(PORT, () => console.log(`server runs http://${HOST}:${PORT}`)); //listen eventi icin zorunlu olan parametre sadece PORT.
