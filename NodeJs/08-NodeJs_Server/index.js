"use strict";

console.log("hi");

//*NODE SERVER*//

const http = require("node:http");

http
  .createServer((req, res) => {
    // console.log(req.method);
    // res.end("hadi ama");
    //console.log("server is running");
  })
  .listen(8000);
