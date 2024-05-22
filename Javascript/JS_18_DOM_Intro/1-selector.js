//* ======================================================
//*                   GETELEMENTSBYID()
//*================================================


document.querySelector("title")




//??______________________________________________________________
// //* example1: button style
// const button = document.getElementById("btn");
// button.style.width = "200px";
// button.style.height = "50px";
// button.style.fontSize = "40px";
// button.style.backgroundColor = "red";

// //* example2: paragraf style

// const paragraf = document.getElementById("par").style;
// paragraf.width = "300px";
// paragraf.height = "80px";
// paragraf.fontSize = "30px";
// paragraf.color = "red";
// paragraf.margin = "200px";

// //* ======================================================
// //*                   GETELEMENTSBYTAGNAME()
// //* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
// //*================================================

// const resim = document.getElementsByTagName("img");
// console.log(resim);
// resim[0].style.width = "300px";
// resim[1].style.border = "5px solid red";

// //* ======================================================
// //*                   GETELEMENTSBYCLASSNAME()
// //* class ismiyle çağırıyoruz
// //*======================================================

// const baslik = document.getElementsByClassName("H1");
// console.log(baslik);

// baslik[0].style.color = "purple";
// baslik[1].style.fontSize = "100px";

// //* HTMLCollection larda ARRAY İ değiştirmeyen metodları kullanabilirsiniz
// for (let i = 0; i < baslik.length; i++) {
//   baslik[i].style.color = "red";
//   baslik[i].style.textAlign = "center";
// }

// //* innerHTML içerik ve etiket ekler
// //*textContent sadece içerik değiştirmeye yarar
// baslik[0].innerHTML = "<a href='https://clarusway.com/'> DOM COK KOLAY</a>";

// baslik[1].textContent = "IYI MISIN?";
// //Sadece icerik degisecekse textContent tercih edilir, ama innerHRML de etiketi degistirebildigi gibi, sadece  icerigi de degistirebilir.

// //* ======================================================
// //*                  QUERYSELECTOR,QUERYSELECTORALL
// //*======================================================

// document.querySelector("title").textContent = "DOM MANIPULATION👌";
// document.querySelector("#badi").style.backgroundImage =
//   "linear-gradient(green,pink)";

// document.querySelector(".H2").style.color = "pink";
// const parag = document.querySelectorAll("p");
// console.log(parag); //Nodelist

// parag[1].style.fontSize = "70px";

// // Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// // Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin-node) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// // Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.

// // HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// // baslik.namedItem("id1").style.color = "red";
// //  baslik[0].style.color="red";

// // NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// // Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// // Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// // getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// // querySelectorAll(), statik bir NodeList döndürür.
// //!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// // Dizi Değil!
// // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// // Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// // Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.
