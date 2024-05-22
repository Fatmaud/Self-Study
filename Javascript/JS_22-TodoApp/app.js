//!LOCALSTORAGE-SİZ YOL

let liste = [];

//! boş liste hem database işini kolaylaştırır, hem ul ye eklenen verinin aynısı tekrar eklenmesin demek için ,bütün p leri çağır içeriğinde input.value deki değer varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz, bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakılabilir

let total = 0;
let completed = 0;

const addButton = document.querySelector("#todo-button");
const listUl = document.querySelector("#todo-ul");
const todoInput = document.querySelector("#todo-input");
const totalSpan = document.querySelector("#toplam");
const completedSpan = document.querySelector("#tamamlanan");

addButton.onclick = () => {
  //input bosken
  if (!todoInput.value) {
    alert("Lütfen bir not giriniz!");

    //daha önce listeye eklenen notun tekrar eklenmesin:⬇️
  } else if (liste.includes(todoInput.value)) {
    // liste isimli bos array i olusturmasaydik bu kodla kontrol saglayacaktik: listUl.textContent.includes(todoInput.value)
    return;
    // return=if in içindeki şart true ise hiçbirşey yapma, koda alt satırdan devam et demek
  } else {
    liste.push(todoInput.value);

    //!ekranda listeyi göster:
    listUl.innerHTML =
      `
    <li class="ayse">
    <i class="fa fa-check fa-lg"></i>
    <p> ${liste[liste.length - 1]}</p>

    <i class="fa fa-trash fa-lg"></i>
    </li>` + listUl.innerHTML;

    //!ekrana bastirmanin 2.yolu
    //<p>${todoInput.value}</p> ===  <p> ${liste[liste.length - 1]}</p>

    total += 1;
    totalSpan.textContent = total;
    todoInput.value = "";
    todoInput.focus(); //her li girisinde cursor inputun icinde olsun
  }
  //!silme metodu, ekrana basıldığı süslü de (add butonuna basılma süslüsünde, func.scope)  olmalı, dışarıda fa-trash lara tıklayınca, remove mantıklı değil, ortada fa-trash daha oluşmadan (add butonuna basılmadan) js ye çağırmak gibi oluyor.

  //!trash butonuna tiklaninca:
  createDeleteButton();

  //!check butonuna tiklaninca:
  createCheckButton();
};

const createDeleteButton = () => {
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      //!listeden silme
      liste = liste.filter(
        (todo) => todo != a.closest("li").querySelector("p").textContent
      );

      //!ekrandan (browser dan silme)
      // a.parentElement.remove();
      //! closest=herhangi bir elemanın istediğiniz uzaklıktaki parent ına götürür. yani a.parentElement.parentElement.parentElement ile 3. babaya ulaşabilirken closest ile 3. babanın adını yazarak direk ulaşabiliriz
      a.closest("li").remove();
      total = total - 1;
      totalSpan.textContent = total;

      //! eğer silinen işin classList inde checked varsa (bitirilmiş yapılmış bir işse) completed sayısından da bir eksiltme yap
      if (a.parentElement.classList.contains("checked")) {
        completed -= 1;
        completedSpan.textContent = completed;
      }
    };
  });
};

const createCheckButton = () => {
  document.querySelectorAll(".fa-check").forEach((a) => {
    a.onclick = () => {
      // if (a.parentElement.className == "checked") {
      //   a.parentElement.className = "";
      // } else {
      //   a.parentElement.className = "checked";
      // }
      if (a.parentElement.classList.contains("checked")) {
        a.parentElement.classList.remove("checked");
        completed -= 1;
      } else {
        a.parentElement.classList.add("checked");
        completed += 1;
      }
      completedSpan.textContent = completed;
    };
  });
};

//! eğer silinen işin classList inde checked varsa (bitirilmiş

// !! classList ve className sonuç istendiğinde aynı sonucu verir tek farkla; classList bir liste, className bir isim şeklinde verir. bunun tek dezavantajı, zaten class ı olan bir elemana className="örnek" şeklinde eleman atamak istersek, varolan elemanları silip sadece örnek class ı nı atar. classList ile toggle ve contains kullanmalıyız, className ile toggle kullanamıyoruz , className de contains yerine includes kullanmalıyız, javascriptte includes tercih edilir
