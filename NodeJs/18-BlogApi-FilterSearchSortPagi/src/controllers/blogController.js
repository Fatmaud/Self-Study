//*Blog Controller
require("express-async-errors"); //* hata fırlatmak
const { BlogPost, BlogCategory } = require("../models/blogModel");

module.exports.BlogCategoryController = {
  list: async (req, res) => {
    const data = await BlogCategory.find();

    res.status(200).send({
      error: false,
      categories: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      category: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogCategory.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      category: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogCategory.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      category: data,
      newData: await BlogCategory.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.id });
    console.log(data);
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "Blog post not found",
      });
    }
  },
};

module.exports.BlogPostController = {
  //!list metodunda gerceklestirdigimiz filter islemlerini ayri bir middleware yazarak oraya tasidik.
  list: async (req, res) => {
    //   //!Filtering:
    //   // URL?filter[key1]=value1&filter[key2]=value2 => url array parameter
    //   //console.log(req.query);
    //   const filter = req.query?.filter || {};
    //   console.log("filter:", filter);
    //   //!Searching:
    //   // URL?search[key1]=value1&search[key2]=value2 => url array parameter
    //   const search = req.query?.search || {};
    //   console.log("search:", search);
    //   //* { title: 'Testuser1', content: 'Testuser' } => { title: {$regex:'Testuser1'}, content:{ $regex: 'Testuser'} }ilk ifadeyi 2.ye cevirmek istiyoruz:⬇️⬇️
    //   for (let key in search) {
    //     //search[("title", "content")] = { $regex: search["title"] };
    //     search[key] = { $regex: search[key] };
    //     console.log("search2:", search);
    //   }
    //   //!Sorting:
    //   //https://mongoosejs.com/docs/api/query.html#Query.prototype.sort()
    //   // URL?sort[key1]=value1&sort[key2]=value2 => url array parameter
    //   // "1" for asc. sorting and "-1" for decs. sorting are deprecated.
    //   //asc=>A-Z vs. desc=>Z-A
    //   const sort = req.query?.sort || {};
    //   //!Pagination:
    //   // url?page=3&limit=10
    //   // => mongoose da skip() ve limit () metodlari ile pagination yapiyoruz:
    //   //!Limit()
    //   let limit = Number(req.query?.limit);
    //   limit = limit > 0 ? limit : 10;
    //   console.log(typeof limit, limit);
    //   //!Page:
    //   let page = Number(req.query?.page);
    //   //page = page > 0 ? page : 1;
    //   page = page > 0 ? page - 1 : 0;
    //   console.log(page);
    //   //!Skip:(atlanacak veri sayisi) biz paginationi yönetmek icin kullanacagiz.
    //   let skip = Number(req.query?.skip); //limit() metodu number bekler
    //   skip = skip > 0 ? skip : page * limit; //page*limit mantigi=eger atlanacak veri sayisi girilmemisse olugum sayfadaki veri kadar veri atla.
    //   console.log(skip);
    //   const data = await BlogPost.find({ ...filter, ...search })
    //     .sort(sort)
    //     .limit(limit)
    //     .skip(skip);

    //! operator kullanımı => https://www.mongodb.com/docs/manual/reference/operator/query/
    // const query = req.query?.q || "";
    // const data = await BlogPost.find({
    //   $or: [
    //     { title: { $regex: query, $options: "i" } }, //*, $options: "i"=> for case insensitivity while making queries
    //     { content: { $regex: query, $options: "i" } },
    //   ],
    // });

    //const data = await res.getModelList(BlogPost,"blogCategoryId");
    const data = await res.getModelList(BlogPost, {
      path: "blogCategoryId",
      select: "name-_id",
    });

    //! populate version2 => populate({path:"blogCategoryId",select:"name -id"})
    //! multi populate => populate([ {path: "blogCategoryId", select: "name -_id", }, { path: "userId" }, ])
    //! multi populate => populate({path: "blogCategoryId", select: "name -_id", }).populate({ path: "userId" })
    // const data = await BlogPost.find({ published: true, }).populate(
    //   "blogCategoryId",
    //   "name -_id"
    // ); //* ilk parametre alanın adı. Eğer istemdğimiz alanlar varsa bunları belirtebiliriz. istedğimiz veya istemediğimiz alanları aralara boşluk koyarak ekleyebiliriz . İstemediğimiz alanların başına "-" koyarak bunları getirme diyebiliriz.

    res.status(200).send({
      error: false,
      blogs: data,
    });
  },
  create: async (req, res) => {
    // req.body.userId = req.session.id
    const data = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      blog: data,
    });
  },
  read: async (req, res) => {
    // const data = await BlogPost.findById(req.params.id); //* sadce id secenegini kabul eder.
    // const data = await BlogPost.findOne({published: false });
    // const data = await BlogPost.findOne({ _id: req.params.id }); //* diğer seçenekleri de kabul eder.
    const data = await BlogPost.findOne({ _id: req.params.id }).populate(
      "blogCategoryId"
    );
    res.status(200).send({
      error: false,
      blog: data,
    });
  },
  update: async (req, res) => {
    // const data = await BlogPost.findByIdAndUpdate(req.params.id,req.body,{new:true}) // {new:true} => return new data
    const data = await BlogPost.updateOne({ _id: req.params.id }, req.body); //* datayı döndürmez yaptığı işlemin özetini döner. O nedenle bu yöntemde newData şeklinde sorgu yazıp güncellenmiş halini gönderebiliriz

    res.status(202).send({
      error: false,
      blog: data,
      newData: await BlogPost.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    // const data = await BlogPost.findByIdAndDelete(req.params.id);
    // if (data) {
    // //   res.sendStatus(204);
    // res.status(200).send({
    //     error: false,
    //     message: "Blog post deleted successfully",
    //     deletedData : data
    // })
    // } else {
    //   res.sendStatus(404);
    // }

    const data = await BlogPost.deleteOne({ _id: req.params.id });
    console.log(data);
    // res.sendStatus(data.deletedCount ? 204 : 404)
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "Blog post not found",
      });
    }
  },

  deleteMany: async (req, res) => {
    // const data = await BlogPost.deleteMany() //* optionda ekleyebilirsiniz.
    const data = await BlogPost.deleteMany({ published: false });
    if (data.deletedCount) {
      res.status(200).send({
        error: false,
        message: "All not published blog posts deleted successfully",
      });
    } else {
      res.status(404).send({
        error: true,
        message: "No blog not published",
      });
    }
  },
  createMany: async (req, res) => {
    const data = await BlogPost.insertMany(req.body.blogs); //* Çoklu veri create etmek için kullanılan yöntem
    //* çoklu veri gönderilirken veriyi json formatında gönderiyoruz:
    //     {
    //         "blogs": [
    //     {
    //       "title": "Blog Title 7",
    //       "content": "Blog Content 7",
    //       "published": false
    //     },
    //     {
    //       "title": "Blog Title 8",
    //       "content": "Blog Content 8",
    //       "published": false
    //     },
    //     {
    //       "title": "Blog Title 9",
    //       "content": "Blog Content 9",
    //       "published": false
    //     }
    //   ]
    // }
    res.status(201).send({
      error: false,
      blog: data,
    });
  },
};
