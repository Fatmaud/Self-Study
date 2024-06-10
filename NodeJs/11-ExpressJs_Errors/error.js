"use strict";
const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

// app.get("/", (req, res) => {
//   res.send("Hello ErRor World!");
// });

app.get("/", (req, res) => {
  throw new Error("Error Management"); //Thunder Body de"Error: Error Management..." cikti
});
//*------------------------------*//
// app.get("/user/:id", (req, res, next) => {
//   const id = req.params?.id || 0;
//   try {
//     if (isNaN(id)) {
//       throw new Error("ID is not a number");
//     }
//   } catch (error) {}
//   res.send(true);
// });
//*------------------------------*//
//?ERROR HANDLER
//?Control with catch(next)
//*------------------------------*//
// app.get("/error", (err, req, res, next) => {
//   res.send(true);
// });
//*------------------------------*//

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`);
});
