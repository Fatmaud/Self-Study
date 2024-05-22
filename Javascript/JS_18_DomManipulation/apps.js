document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";

const resim = document.querySelector(".resim");
const ses1 = document.querySelector(".ses1");

//! ara butonuna tiklandiginda:

document.querySelector(".ara").onclick = () => {
  resim.src = "./img/img.gif";
  // play() komutu html deki audio etiketini js de çalıştırır
  ses1.play();
  //sesin volume ünü 0 ile 1 arasında değer vererek ayarlayabilirsiniz
  ses1.volume = 0.1;
};

//! baglan butonuna tiklandiginda:

document.querySelector(".baglan").onclick = () => {
  resim.src = "./img/telbagla.gif";
  ses1.pause();
};

//! konus butonuna tiklandiginda:

document.querySelector(".konus").onclick = () => {
  resim.src = "./img/telefon.gif";
  ses1.pause();
};

//! mouse ile resmin üzerine gelindiginde:

resim.addEventListener("mouseover", () => {
  resim.src = "./img/aslan2.jpeg";
  document.querySelector(".ses2").play();
});

//!mouse resmin üzerinden ayrildiginda:

resim.addEventListener("mouseout", () => {
  resim.src = "./img/aslan1.jpeg";
  document.querySelector(".ses2").pause();
});

//!klavyeden inputa veri girisi yapilirken elimizi butondan cektigimizde olusan degisiklik:

const textInput = document.querySelector(".textbox");
const checkInput = document.querySelector(".checkbox"); //bu sekilde inputa ulasiyoruz-kutusuna; icindeki degere degil.bunun icin value suna refer etmemiz lazim⬇️⬇️

textInput.onkeyup = () => {
  //   if (checkInput.checked) {
  //     textInput.value = textInput.value.toUpperCase();
  //   } else {
  //     textInput.value = textInput.value.toLowerCase();
  //   }
  checkInput.checked
    ? (textInput.value = textInput.value.toUpperCase())
    : (textInput.value = textInput.value.toLowerCase());
}; ///"onkeyup" klavyede basip elini kaldirinca fonksiyon icindeki komut gerceklesiyor.

//! listemin başına "Programlama Dilleri" h1 etiketi eklemek ****uzun yol*****

//? HTML DE h1 elementi oluştur
const baslik = document.createElement("h1");

{
  /* <h1></h1> */
}

//? oluşan h1 elementine class ismi ata
baslik.className = "baslik2";
{
  /* <h1 class="baslik2"></h1> */
}

//?Programlama Dilleri text i oluştur
const yazi = document.createTextNode("PROGRAMLAMA DILLERI");

//? h1 elementi için oluşturduğum text i h1 e child yapalım
baslik.appendChild(yazi);
{
  /* <h1 class="baslik2"> Programlama Dilleri</h1> */
}

const inputDiv = document.querySelector(".input-div");

//? input-div class isimli div in son child ı yapalım
inputDiv.appendChild(baslik);

//? input-div class isimli div den hemen sonraya ekle
inputDiv.after(baslik);

//!!  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-). before ile de etiketin önüne ekleyebiliriz

//!⬇️⬇️ 1. kisayol⬇️⬇️

// const inputDiv = document.querySelector(".input-div");

// inputDiv.innerHTML=inputDiv.innerHTML+h1===⬇️⬇️
// inputDiv.innerHTML += `<h1 class="title text-primary">Programlara Dilleri</h1>`;

//!  kısayol ile daha önce event yapılmış bir tag in içeriğine ekleme yaparsak hata alabiliriz. bu yüzden yeri olmayan bir etiketi kısayol ile eklemek istiyorsak, html de onun için boş bir div açmakta fayda var

document.querySelector(
  ".mecburen"
).innerHTML += `<h1 class="title text-primary">Programlara Dilleri</h1>`;

//! languages inputuna girilen değerleri, ul ye eklemek
const inputDil = document.querySelector(".languages");
const liste = document.querySelector(".liste");

//!uzun yol (ekle butonuna tiklaninca olacaklar: )
// document.querySelector(".add").onclick = () => {
//   const yeniLi = document.createElement("li");
//   // yeni girilen satiri saklamak icin bir li olusturduk.

//   const text = document.createTextNode(inputDil.value);
//   //yeniLi icin textnode olusturduk.

//   yeniLi.appendChild(text);
//   // olusturdugumuz textnode'u yeni li'ye bagladik.

//   liste.appendChild(yeniLi);
//   // yeni eklenen satiri var olan listeye (ul) bagladik.
// };

//!KISA yol:
document.querySelector(".add").onclick = () => {
  liste.innerHTML += `<li>${inputDil.value}</li>`;
  inputDil.value = ""; //ekle ye basilinca input un ici bosalsin
};

//! sil butonuna basinca ul listesinden li elemanini silmek icin removeChild metodunu kullanacagiz.
document.querySelector(".delete").onclick = () => {
  liste.removeChild(liste.lastElementChild);
  // liste.removeChild(liste.firstElementChild);
  // liste.removeChild(liste.children[2]);
};

inputDil.onkeydown = (e) => {
  console.log(e.key);

  if (e.keyCode == 13) {
    document.querySelector(".add").click();
  }
  if (e.keyCode == 46) {
    document.querySelector(".delete").click();
  }
};
