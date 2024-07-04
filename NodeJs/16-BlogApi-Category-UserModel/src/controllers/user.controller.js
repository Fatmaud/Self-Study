const User = require("../models/user.model");

//bir tane controller yazacgimiz icin, direkt module exports un icinde yazabiliriz:
module.exports = {
  list: async (req, res) => {
    const data = await User.find().select("-password"); //istek attigimizda, select metodu ile passwordu getirmesini engelliyoruz.
    res.status(200).send({
      error: false,
      users: data, //data:data //gelen datayi front-ende gönder
    });
  },
  create: async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).send({
      error: false,
      message: "User is successfully created!",
      user,
    });
  },
  read: async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    res.status(200).send({
      error: false,
      user,
    });
  },
  update: async (req, res) => {
    const data = await User.findOneAndUpdate(
      { _id: req.params.userId },
      req.body
    );
    res.status(202).send({
      error: false,
      message: "User is successfully created!",
      result: data,
      user: await User.findOne({ _id: req.params.userId }),
    });
  },
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.UserId });
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "User not found!",
      });
    }
  },
};
