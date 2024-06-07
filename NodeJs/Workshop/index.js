// const http = require("http");
// const url = require("url");
// const routeHandler = (req, res) => {
//   console.log(req);
//   if (req.url == "/") {
//     res.write("Hello");
//     console.log("hello");
//     res.end();
//   } else {
//     res.write("Not Found");
//     res.end();
//   }
// };

// const server = http.createServer(routeHandler);
// server.listen(3000);

const express = require("express");
const app = express();
const products = require("./products.json");

app.get("/products", (req, res) => {
  res.send({ message: "Hello Products", products });
});

app.listen(8000, () => console.log(`server runned `));
