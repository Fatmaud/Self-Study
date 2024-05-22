//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ===================================================
//!table da kullanılacak değişkenler
const shipping = 15.0;
const tax = 0.18;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
];

//!EKRANA BASTIRMA
showScreen();

function showScreen() {
  //*toFixed metodu sayıyı string e çevirir
  sepettekiler.forEach(({ name, price, piece, img }) => {
    //!DESTRUCTURING
    // const{name,price,piece,img}=ürün

    document.querySelector("#product-rowlari").innerHTML += `
 <div class="card mb-3" style="max-width: 540px;">

  <div class="row ">

    <div class="col-md-5 ">
      <img src=${img}  class=" w-100 rounded-start" alt="...">
    </div>

    <div class="col-md-7 ">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(price * 0.7).toFixed(
                        2
                      )} </span>
                      <span class="h5 text-dark text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-ürün">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="product-total">${(
                      price *
                      0.7 *
                      piece
                    ).toFixed(2)} </span>
                  </div>
      </div>
    </div>
  </div>
</div>`;
  });
}

//! browser daki toplam fiyatların olduğu table ın güncelleme fonksiyonu
calculateCardTotal();

//! Card toplam değerlerini hesaplama
function calculateCardTotal() {
  //! her bir card daki ürün toplam kısımları
  const a = document.querySelectorAll(".product-total");
  //!   querySelectorAll(), statik bir NodeList döndürür.
  //!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/
  // Dizi Değil!
  // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
  // Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.
  // Ancak, bir NodeList'te reduce(), push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

  //? productsToplam= en alttaki tüm ürünler için vergi ve kargo hariç sepettekilerin indirimli fiyat toplamı
  //?Reduce tam olarak Array istiyor, nodelist yeterli değil

  // console.log(Array.from(a));

  const productsTotal = Array.from(a).reduce(
    (acc, item) => acc + Number(item.textContent),
    0
  );

  document.querySelector(".productstoplam").textContent = productsTotal;

  document.querySelector(".vergi").textContent = productsTotal * tax;

  document.querySelector(".kargo").textContent = productsTotal ? shipping : 0;

  document.querySelector(".toplam").textContent =
    productsTotal > 0 &&
    (productsTotal + productsTotal * tax + shipping).toFixed(2);
}
