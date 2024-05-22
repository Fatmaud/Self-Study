//* ======================================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread==============================================
//!table da kullanılacak değişkenler
const kargo = 15.0;
const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

sepettekiler.forEach((ürün,i)=>{

  document.querySelectorAll("img")[i].src=ürün.img
  document.querySelectorAll("h5")[i].textContent=ürün.name
  document.querySelectorAll(".h5")[i].textContent=ürün.price
document.querySelectorAll(".indirim-price")[i].textContent=(ürün.price*0.7).toFixed(2)

document.querySelectorAll(".ürün-toplam")[i].textContent = (ürün.price * 0.7*ürün.adet).toFixed(2)
})


