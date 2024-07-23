module.exports = async (req, res, next) => {
  //!Filtering:
  // URL?filter[key1]=value1&filter[key2]=value2 => url array parameter
  //console.log(req.query);
  const filter = req.query?.filter || {};
  console.log("filter:", filter);

  //!Searching:
  // URL?search[key1]=value1&search[key2]=value2 => url array parameter
  const search = req.query?.search || {};
  console.log("search:", search);
  //* { title: 'Testuser1', content: 'Testuser' } => { title: {$regex:'Testuser1'}, content:{ $regex: 'Testuser'} }ilk ifadeyi 2.ye cevirmek istiyoruz:⬇️⬇️
  for (let key in search) {
    //search[("title", "content")] = { $regex: search["title"] };
    search[key] = { $regex: search[key] };
    console.log("search2:", search);
  }

  //!Sorting:
  //https://mongoosejs.com/docs/api/query.html#Query.prototype.sort()
  // URL?sort[key1]=value1&sort[key2]=value2 => url array parameter
  // "1" for asc. sorting and "-1" for decs. sorting are deprecated.
  //asc=>A-Z vs. desc=>Z-A
  const sort = req.query?.sort || {};

  //!Pagination:
  // url?page=3&limit=10
  // => mongoose da skip() ve limit () metodlari ile pagination yapiyoruz:

  //&Limit()
  let limit = Number(req.query?.limit); // limit() metodu number bekler diyelim
  limit = limit > 0 ? limit : 20;
  console.log(typeof limit, limit);

  //!Page:
  let page = Number(req.query?.page);
  //page = page > 0 ? page : 1;
  page = page > 0 ? page - 1 : 0;

  console.log(page);

  //&Skip:(atlanacak veri sayisi) biz paginationi yönetmek icin kullanacagiz.
  let skip = Number(req.query?.skip); //limit() metodu number bekler
  skip = skip > 0 ? skip : page * limit; //page*limit mantigi=eger atlanacak veri sayisi girilmemisse olugum sayfadaki veri kadar veri atla.
  console.log(skip);
  // const data = await BlogPost.find({ ...filter, ...search })
  //   .sort(sort)
  //   .limit(limit)
  //   .skip(skip);

  //?Buraya kadar olan kismi blogController dan tasidik. Alltaki response kismini biz burada ekledik:
  res.getModelList = async function (Model, populate = null) {
    return await Model.find({ ...filter, ...search })
      .sort(sort)
      .limit(limit)
      .skip(skip)
      .populate(populate);
  };
  res.getModelListDetails = async (Model) => {
    const data = await Model.find({ ...filter, ...search });

    let details = {
      filter,
      search,
      sort,
      skip,
      limit,
      page,
      pages: {
        previous: page > 0 ? page : false,
        activePage: page + 1,
        next: page + 2,
        totalPage: Math.ceil(data.length / limit),
      },
      total: data.length,
    };
    details.pages.next =
      details.pages.next > details.pages.totalPage ? false : details.pages.next;
    if (details.total <= limit) details.pages = false;
    return details;
  };

  next();
};
