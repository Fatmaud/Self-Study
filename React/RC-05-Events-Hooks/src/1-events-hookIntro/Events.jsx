//! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor

const Events = () => {
  //!JS alani
  let baslik = "merhaba";
  let counter = 0;

  //fonksiyonu js alaninda yaziyrz:
  const arttir = () => {
    counter = counter + 1;
  };

  const changeTitle = (a) => {
    baslik = a;
    console.log(a);
    document.querySelector("h1").textContent = a;
  };

  return (
    //!JSX alani
    <div className="container text-center mt-4">
      <h1>{baslik}</h1>
      <h2>COUNT: {counter}</h2>

      <button onClick={arttir} className="btn btn-danger me-2">
        ARTTIR
      </button>
      <button
        onClick={() => changeTitle("naber")}
        className="btn btn-success me-2"
      >
        BASLIK DEGISTIR
      </button>
      <button className="btn btn-warning">TIKLANDI</button>
    </div>
  );
};

export default Events;

//? Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
//? 1- Herhangi bir state degisirse
//? 2- Props degisirse
//? 3- Refresh force edilirse (tercih edilen bir durum olmaz)

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------
