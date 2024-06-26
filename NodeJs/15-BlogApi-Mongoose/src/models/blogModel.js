//? Blog Models
const mongoose = require("mongoose");

// const nameSchema = new mongoose.Schema(
//   {
//     //_id : Auto Generated
//     // fieldName: String, // shorthand
//     fieldName: {
//       type: String, // Veri Tipi
//       default:true//veri gelmezse eklenecek deger
//       required: true, // Gelen veriden zorunlu olarak olsun mu ?
//       required: [true, "Error-Message"], //* Hata mesajını özelleştirme
//       trim: true, // string tipindeki bir alanın başında ve sonunda bulunan boşluk karakterlerinin     otomatik olarak kesilmesini sağlar. Bu, veri doğrulama ve temizleme işlemlerinde oldukça kullanışlıdır çünkü veri giriş hatalarını ve gereksiz boşlukları önler.
//       unique: true, // Benzersiz olmalı
//       index: true, // Daha hızlı erişim olsun mu ?
//       select: true, // Data çağrıldığında bu alan gelsin mi gelmesin mi ?
//       validate: [
//         function (data) {
//           return true;
//         },
//         "Error-Message",
//       ], //* veriyi kontrolden geçiren fonksiyon
//       enum: [["0", "1", "2", "3"], "error-message"], //* Choices / Pattern / Limit
//       get: function (data) {
//         return data;
//       }, // Data çağrılırken çalışan fonksiyon
//       set: function (data) {
//         return data;
//       }, // Datayı kaydederken çalışan fonksiyon
//     },
//   },
//   {
//     collection: "collectionName",
//     timestamps: true, // CreatedAt ve UpdatedAt auto
//   }
// );

const blogPostSchema = new mongoose.Schema(
  {
    // _id
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    published: {
      type: Boolean,
      default: true, //"published" alani belirtilmediginde (yayinlanma durumu), otomatik olarak (default:true) yayinlanmis kabul edilecek
    },
    // createdAt
    // updatedAt
  },
  {
    collection: "BlogPosts",
    timestamps: true,
  }
);

//*from https://mongoosejs.com/docs/models.html⬇️⬇️
//*When you call mongoose.model() on a schema, Mongoose compiles a model for you.

//* const schema = new mongoose.Schema({ name: String, size: String });
//* const Tank = mongoose.model('Tank', schema);
//*The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.

//* Note: The .model() function makes a copy of schema. Make sure that you've added everything you want to schema, including hooks, before calling .model()!

// const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);

// module.exports = {
//   BlogPost: BlogPostModel,
// };//? daha az kodla asagidaki exportu yapabiliriz:

module.exports = { BlogPost: mongoose.model("BlogPost", blogPostSchema) };
