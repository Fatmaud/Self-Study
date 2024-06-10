"use strict";

//*Sirasiyla yüklenenler listesi:
//nmp i express donenv
//npm i express-async-error//async functionlarda hata kontrol paketi
//npm install sequelize sqlite3

const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

app.all("/", (req, res) => {
  res.send("TODO APP");
}); //sadece verilan path e istek atilabilir, sonuna bsy ekleyinca hata aliriz.

/*app.use("/todo", (req, res) => {
  res.send("TODO APP"); // "app.use" ile verilen pathe ne eklersek ekleyelim yine cevap alinir.(TODO+ALL url/path)
});*/

//*-->json to obj. and obj to json<--⬇️
app.use(express.json()); //"use" ifadesinden anliyoruz ki bu kod her istek atiminda calisacak.

//*Connecting Express to DB:
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:./db.sqlite3"); //(RDBMS:adres);

//&1.Creating MODEL:
//const Todo=sequelize.define("table/model name", {"model details"})⬇️⬇
const Todo = sequelize.define("todos", {
  //?id field auto otomatik olaak bu alani olusturuyor, asagidaki gibi manuel yazmamiza gerek kalmiyor.
  //   id: {
  //     type: DataTypes.BIGINT,
  //     primaryKey: true, //default "false"
  //     unique: true, //default "false"
  //     autoIncrement: true, //default "false"
  //     allowNull: false, //default "true"
  //     comment: "my comment", //bu fieldla ilgili herhangi birsey belirtmek istenirse
  //     field: "custom name",
  //     defaultValue: "default value",}

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT, //tek satir bilgiyse, sadece type yaziliyorsa süslü parantez koymak gereksiz.
  priority: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0, //-1:low, 0:normal, 1:high
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  //?create and update dates are auto generated.
  //   createdDate: { type: DataTypes.DATE },
});

//&2.DB Connection:
//sequelize.sync(), //?bir kez calistiktan sonra yoruma alailirsin, tekrar calismasina gerek yok, ama tekrar kullanmak gerekirse diye asagidaki gibi bir kod kullaniyoruz:
//sequelize.sync({ force: true }); //bu kod her seferinde db yi silip yeniden olusturur.
sequelize.sync({ alter: true }); //bu kod db yi güncellemek için kullanılır.
sequelize
  .authenticate()
  .then(console.log("ToDo App is connected to DB "))
  .catch(console.log("Unable to connect to the DB "));

//*CRUD operations:

//*Error Control:
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res?.errorStatusCode || 500;
  res.status(errorStatusCode).send({
    error: true,
    status: false,
    message: err.message,
    //cause: err.cause,->hatanin sebebi
    //stack: err.stack,->hatanin sebebine dair ayrinti
  });
};

app.listen(PORT, () => console.log(`server runned http://${HOST}:${PORT}`));
