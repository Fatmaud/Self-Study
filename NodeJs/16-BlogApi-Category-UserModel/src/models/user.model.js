const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    firstname: String,
    lastname: String,
  },
  {
    collection: "user",
    timestamps: true,
  }
);

module.exports = mongoose.Model("User", UserSchema);
