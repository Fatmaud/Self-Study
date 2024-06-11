"use strict";

//*Sirasiyla yüklenenler listesi:
//nmp i express dotenv
//npm i express-async-error//async functionlarda hata kontrol paketi
//npm install sequelize sqlite3

const express = require("express");
const app = express();

require("dotenv").config();

require("express-async-error");

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

app.all("/", (req, res) => {
  res.send("TODO APP");
}); //sadece verilan path e istek atilabilir, sonuna bsy ekleyinca hata aliriz.

/*app.use("/todo", (req, res) => {
  res.send("TODO APP"); // "app.use" ile verilen pathe ne eklersek ekleyelim yine cevap alinir.(TODO+ALL url/path)
});*/

//*-->json to obj. and obj to json<--⬇️
//?Express.js uygulamalarında, gelen HTTP isteklerinin gövdesindeki JSON verilerini parse etmek için express.json() middleware'i kullanılır. Bu middleware, gelen isteklerin gövdesindeki JSON verilerini otomatik olarak parse eder ve req.body nesnesi içine yerleştirir.
//? Veri almadan önce yazilmasi gerekir. Yoksa req.body undefined olur
app.use(express.json()); //"use" ifadesinden anliyoruz ki bu kod her istek atiminda calisacak.

//*Connecting Express to DB:
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:./db.sqlite3"); //(RDBMS:adres);

//&1.Creating MODEL:
//const Todo=sequelize.define("table/model name", {"model details"})⬇️⬇
const Todo = sequelize.define("todos", {
  //?id field auto otomatik olarak bu alani olusturuyor, asagidaki gibi manuel yazmamiza gerek kalmiyor.
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
//sequelize.sync(), //?bir kez calistiktan sonra yoruma alabilirsin, tekrar calismasina gerek yok.
//sequelize.sync({ force: true }); //bu kod her seferinde db yi silip yeniden olusturur.
//sequelize.sync({ alter: true }); //bu kod db yi güncellemek için kullanılır.

sequelize
  .authenticate() // connect to db
  .then(() => console.log("Todo DB connected"))
  .catch(() => console.log("Todo DB NOT connected"));

//*CRUD operations:
const router = express.Router();

//?model olusturmak icin kullandigimiz fonksiyonlar asenkron oldugu icin "async-await":
//&LIST todos (all):
router.get("/todos", async (req, res) => {
  const data = await Todo.findAndCountAll();

  res.status(200).send({ error: false, data: data });
});

//&CREATE todo:
router.post("/todos", async (req, res) => {
  console.log(req.body);
  //   const data = await Todo.create({
  //     title: "task 1",
  //     description: "desc. for task 1",
  //     priority: -1,
  //     isDone: true,
  //   });
  const data = await Todo.create(req.body);

  res.status(201).send({ error: false, data: data });
});

//&READ todo (by id):
router.get("/todos/:id", async (req, res) => {
  //const data = await Todo.findOne({ where: { id: req.params.id } }); //"ID"ye göre data getirme
  const data = await Todo.findByPk(req.params.id); //"primary key"e göre data cikarma-paramstan sonra yazdigimiz parametreyi PK alip ona göre filtreliyor

  res.status(200).send({ error: false, data: data });
});

//&UPDATE todo:
router.put("/todos/:id", async (req, res) => {
  const data = await Todo.update(req.body, { where: { id: req.params.id } });

  res.status(201).send({ error: false, data: data });
});

//DELETE todo

app.use(router);

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
app.use(errorHandler);

app.listen(PORT, () => console.log(`server runned http://${HOST}:${PORT}`));
