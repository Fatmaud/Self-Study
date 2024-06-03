"use strict";

console.log("hi");

//*NODE SERVER*//

const http = require("node:http");

// const dotenv = require(dotenv);
//dotenv.config()
//-->kisayolu asagida
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
//http://localhost:8000 // domain
const HOST = process.env.HOST || "127.0.0.1";

//!Serverda hersey request le response arasinda olur. bu iki safha arasinda yazilan event/sart vs ifade eden herbir code blogu middleware dir.

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
