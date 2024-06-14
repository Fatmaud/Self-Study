//mongosh a giris yap
// use("teamwork") ile yeni bir db olustur.
// db.createCollection("poeple") ile yeni bir collection olustur.
// show("collections");
// db.users.insertOne({ id: 0, user_id: "user_cba", status: "D", age: 25 }

db.people.insertMany([
  { id: 1, user_id: "user_abc", status: "A", age: 25 },
  { id: 2, user_id: "user_def", status: "B", age: 30 },
  { id: 3, user_id: "user_ghi", status: "C", age: 22 },
  { id: 4, user_id: "user_jkl", status: "D", age: 28 },
  { id: 5, user_id: "user_mno", status: "A", age: 55 },
  { id: 6, user_id: "user_pqr", status: "B", age: 40 },
  { id: 7, user_id: "user_stu", status: "C", age: 26 },
  { id: 8, user_id: "user_vwx", status: "D", age: 32 },
  { id: 9, user_id: "user_yza", status: "A", age: 24 },
  { id: 10, user_id: "user_bcd", status: "B", age: 29 },
  { id: 11, user_id: "user_efg", status: "C", age: 58 },
  { id: 12, user_id: "user_hij", status: "D", age: 33 },
  { id: 13, user_id: "user_klm", status: "A", age: 31 },
  { id: 14, user_id: "user_nop", status: "B", age: 23 },
  { id: 15, user_id: "user_qrs", status: "C", age: 34 },
  { id: 16, user_id: "user_tuv", status: "D", age: 21 },
  { id: 17, user_id: "user_wxy", status: "A", age: 38 },
  { id: 18, user_id: "user_zab", status: "B", age: 63 },
  { id: 19, user_id: "user_cde", status: "C", age: 39 },
  { id: 20, user_id: "user_fgh", status: "D", age: 20 },
]);

//?QUESTIONS:
// db.people.find(); //find all
// db.people.find({}, { _id: 0, id: 1, user_id: 1, status: 1 }); //people koll. her belge için user_id ve status alanlarını içeren bir sonuç
// db.people.find({}, { user_id: 1, status: 1, _id: 0 });
// db.people.find({ status: "A" });
// db.people.find({ status: "A" }, { user_id: 1, status: 1, _id: 0 });
// db.people.find({ status: { $ne: "A" } });
// db.people.find({ status: "A", age: 50 });
// db.people.find({ $or: [{ status: "A" }, { age: 50 }] });
// db.people.find({ age: { $gt: 25 } });
// db.people.find({ age: { $lt: 25 } });
// db.people.find({ age: { $gt: 25, $lte: 50 } });
// db.people.find({ user_id: { $regex: /^bc/ } }); //db.people.find({ user_id: /bc/ });
// db.people.find({ status: "A" }).sort({ user_id: 1 });
// db.people.find({ status: "A" }).sort({ user_id: -1 });
// db.people.find().count(); //db.people.count();
// db.people.count({ user_id: { $exists: true } });
// db.people.find({ age: { $gt: 30 } }).count(); //db.people.count({ age: { $gt: 30 } });
// db.people.distinct("status");
// db.people.find().limit(1); //db.people.findOne();
// db.people.find().limit(5).skip(10);
// db.people.insertOne({
//   user_id: "abc123",
//   age: 55,
//   status: "A",
// });
// db.people.updateMany({}, { $set: { join_date: new Date() } });
// db.people.drop();
// db.people.insertOne({ user_id: "bcd001", age: 45, status: "A" });
// db.people.updateMany({ age: { $gt: 25 } }, { $set: { status: "C" } });
// db.people.updateMany({ status: "A" }, { $inc: { age: 3 } });
// db.people.deleteMany({ status: "D" });
// db.people.deleteMany({});
