const mongoose = require("mongoose");

const passwordEncrypt = require("../helpers/passwordEncrypt");

/*******************************************/
//?⬇️⬇️Password Encrypt dosayina tasindi (helpers). Yukariya import edildi
//!password hashleme:

// const crypto = require("node:crypto");
// const keyCode = process.env.SECRET_KEY;
// const loopCount = 10000; //her kullanimda tekrar saltlanip (=hashlenmek) hack ihtimali azaltmak icin. Bu islemi kac kez yapacaginii belirttik. Cok yüksek sayi verirsek app in performansini etkiler.
// const charCount = 32; //write 32 for 64
// const encType = "sha512";

// const passwordEncrypt = (password) => {
//   // const newPass = crypto
//   //   .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
//   //   .toString("hex");
//   // console.log(newPass);//hashlenmis passwordu console da görmek icin bir degiskene atadik.
//   return crypto
//     .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
//     .toString("hex");
// };
// passwordEncrypt("123456");
/*******************************************/

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      //   validate:[(email)=>{
      //     if(email.includes('@') && email.split('@')[1].includes(".")){
      //       return true
      //     }
      //     return false
      //   }, "Email is invalid!"]
      // },⬇️⬇
      validate: [
        (email) => {
          email.includes("@") && email.split("@")[1].includes("."),
            "invalid Email";
        },
      ], //validate iki parametre alir: 1. fonksiyon, bu fonksiyounun parametresi validate edilecek alanin bilgisi,DB ye kayit istegi icin gelen bilgi. burada "email"
    },
    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
      //set: (password) => "anthony", //mesela bu fonksiyonla password ne gelirse gelsin anthony olarak kaydedilir :D
    },
    firstname: String,
    lastname: String,
  },
  {
    collection: "user",
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
