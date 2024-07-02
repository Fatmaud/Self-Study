"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
      const user = await Personnel.findOne({ username, password });
      if (user && user.isActive) {
        let tokenData = await Token.findOne({ iserID: user._id });
        if (!tokenData) {
          const tokenKey = user._id + Date.now(); //unique tokenkey olusturmak icin bu formulu kullandik
          tokenData = await Token.create({ userId: user_id, token: tokenKey });
        }
      }
    } else {
    }
  },
  logout: (req, res) => {},
};
