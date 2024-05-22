//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimini cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import React, { useState } from "react";
import Events from "../1-events-hookIntro/Events";

const Hooks = () => {
  //!usestate hook u her zaman en üste yazılmalı
  //********* */
  const [sayac, setSayac] = useState(0);
  // let sayac=0
  //********* */
  //????????????
  const [kisi, setKisi] = useState({
    isim: "saban",
    meslek: "developer",
    yas: 50,
    renk: "red",
  });

  //!objectlinin 2. yolu
  const [toggle, setToggle] = useState(true);

  const handleSwap = () => {
    setToggle(!toggle);

    if (toggle) {
      setKisi({
        isim: "saban",
        meslek: "developer",
        yas: 50,
        renk: "red",
      });
    } else {
      setKisi({
        isim: "emre",
        meslek: "Full-stack",
        yas: 33,
        renk: "orange",
      });
    }
  };

  //??????
  //! object linin 1.yolu
  //   const handleSwap = () => {
  //     if (kisi.isim ==="saban") {
  //       setKisi({ isim: "emre",
  //        meslek: "Full-stack",
  //         yas: 33,
  //         renk: "blue" });
  //     }else{
  // setKisi({
  //   isim: "saban",
  //   meslek: "developer",
  //   yas: 50,
  //   renk: "red",
  // });

  //     }
  //   }

  const isimChange = () => {
    setKisi({ ...kisi, isim: "emre", renk: "yellow" });
  };
  //********* */
  const arttir = () => {
    // sayac+=1

    setSayac(sayac + 1); //sayac=sayac+1
  };
  //********* */
  return (
    <div className="container text-center">
      <h2>****************************</h2>
      <h2>****************************</h2>
      <h1>USESTATE</h1>

      <h2>COUNT:{sayac}</h2>

      <button onClick={arttir} className="btn btn-primary">
        ARTTIR
      </button>

      <button
        onClick={() => sayac > 0 && setSayac(sayac - 1)}
        className="btn btn-info"
      >
        AZALT
      </button>

      <h1>**********************************</h1>

      <div>
        <h1>OBJECT İLE USESTATE KULLANIMI </h1>
        <h2 className="text-danger">{kisi.isim} </h2>
        <h3 className="text-primary">{kisi.meslek}</h3>
        <h5 className="text-success">{kisi.yas}</h5>

        <button
          onClick={handleSwap}
          style={{ backgroundColor: kisi.renk, fontSize: "25px" }}
          className="btn m-4 p-4"
        >
          ToggleDEĞİŞTİR
        </button>
        <button
          onClick={isimChange}
          style={{ backgroundColor: kisi.renk, fontSize: "25px" }}
          className="btn m-4 p-4"
        >
          İsimDEĞİŞTİR
        </button>

        <button
          onClick={() => setKisi({ ...kisi, yas: 30 })}
          style={{ backgroundColor: "green", fontSize: "25px" }}
          className="btn m-4 p-4"
        >
          yasDEGİSTİR
        </button>
        {/* Toggle true ise Events componentini goster aksi takdirde gosterme, alttakini yorumdan çıkarmak istersek App.js deki Events comp. yoruma almalıyız */}
        {/* {toggle && <Events />} */}
      </div>
    </div>
  );
};

export default Hooks;
