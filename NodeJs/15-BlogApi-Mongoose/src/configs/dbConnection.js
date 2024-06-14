//* MongoDb connection
// getting-started.js
const mongoose = require("mongoose");

// main()
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.MONGODB);
// } //?-->>Bu kod yerine, degisken tanimlamadan, direkt asagidaki kodu kullanabiliriz:-->>
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
