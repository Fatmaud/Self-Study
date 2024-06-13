"use strict";
const Contact = require("../models/contactModel");
module.exports = {
  list: async (req, res) => {
    //const data = await sequelize.query("SELECT * FROM contacts");
    const data = await Contact.findAndCountAll();
    console.log(data);
    res.status(200).send({
      error: false,
      contacts: data,
    });
  },
  create: async (req, res) => {
    const data = await Contact.create(req.body);
    res.status(201).send({
      error: false,
      contact: data,
    });
  },
  get: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
