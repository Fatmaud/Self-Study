"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const User = require("../models/user");
const Token = require("../models/token");
const { CustomError } = require("../errors/customError");

module.exports = {
  login: async (req, res) => {
    const { username, email, password } = req.body;
    if (password && (username || email)) {
    } else {
      throw new CustomError("Please enter username/email and password", 401);
    }
  },
  logout: async (req, res) => {},
};
