//*Blog Controller
require("express-async-errors"); //error handler i ana dizinde "index.js" te de cagirabilirdik, o zmn ona bagli tüm dosyalarda calisirdi. Biz burada cagirarak sadece burada calismasini sagladik
const { BlogPost } = require("../models/blogModel");

module.exports.BlogPostController = {
  list: async (req, res) => {
    const data = await BlogPost.find(); //modeldeki tüm verileri getir
    //const data = await BlogPost.find({ published: true }); //sadece istenen kriterleri saglayan verileri döndürür

    res.status(200).send({
      error: false,
      blogs: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body); //hem veri olusturur hem dbye kaydeder

    res.status(201).send({
      error: false,
      blog: data,
    });
  },
  createMany: async (req, res) => {
    const data = await BlogPost.insertMany(req.body.blogs);
    res.status(201).send({
      error: false,
      blog: data,
    }); //coklu veri olusturma
  },

  read: async (req, res) => {
    const data = await BlogPost.findById(req.params.id);
    //const data = await BlogPost.findOne({_id: req.params.id});
    // const data = await BlogPost.findOne({ published: false });

    res.status(200).send({
      error: false,
      blog: data,
    });
  },
  update: async (req, res) => {
    //const data = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    // }); //{new:true} ile update edilmis veriyi, new datayi return etmesini sagliyoruz.
    const data = await BlogPost.updateOne({ _id: req.params.id }, req.body); //datayi degil yapilan islemin özetini döndürür
    res.status(202).send({
      error: false,
      blog: data,
      newData: await BlogPost.findOne({ _id: req.params.id }), //yapilan update sonra veriyi response olarak döndürür
    });
  },
  delete: async (req, res) => {
    //?1.yöntem:
    //const data = await BlogPost.findByIdAndDelete(req.params.id);
    // console.log(data);
    // if (data) {
    //   // res.sendStatus(204);
    //   res.status(200).send({
    //     error: false,
    //     message: "Blog post deleted!",
    //     deletedData: data,
    //   }); //silinen bilgiyi ve silindi mesajini da döndürdük.
    // } else {
    //   res.sendStatus(404); //sadece status code gönderecegimizde "res.sendStatus" yeterli.
    // }
    //?2.Yöntem
    const data = await BlogPost.deleteOne({ _id: req.params.id });
    console.log(data);
    // res.sendStatus(data.deletedCount ? 204 : 404);
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "Blog post not found!",
      });
    }
  },
  deleteMany: async (req, res) => {
    const data = await BlogPost.deleteMany();
    //const data = await BlogPost.deleteMany({published:true});//
    res.status(200).send({
      error: false,
      message: "All blog posts deleted!",
    }); //!coklu veri silme--bu sekilde tüm veriler silinecegi cin dikkatli olmak gerekir
  },
};
