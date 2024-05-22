//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir.
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

import React from "react";
//!localdeki src altındaki resimler bu şekilde import edilir

//!External CSS import ile yapilir: harici css dosyaları direkt import edilir herhangi bir isim vermeye gerek yok
import "./Msg.css";
import resim2 from "../img/Zoom_17.jpg";
import Clock from "../clock/Clock";

const Msg = () => {
  //!javascript alanı---ekrana basilmayan kisim:

  //!Internal CSS: (External css i ezer)
  const styleA = {
    color: "green",
    fontFamily: "Tahoma",
  };

  const styleImg = {
    width: "400px",
  };

  //! return ün altı react alanı (jsx alanı)---return ekrana basilacak kismi döndürüyor:
  return (
    <div>
      <h2 style={styleA}>burası MSG sayfası</h2>
      {/* //!inline CSS: */}
      <p style={{ color: "red", fontSize: "30px" }}> Hoşgeldin REACT</p>

      <Clock />

      {/* netten alınan resim yolu */}
      <img
        className="img"
        style={styleImg}
        src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg"
        alt=""
      />
      <Clock />
      <img
        className="img"
        style={styleImg}
        src={resim2}
        alt=""
        height="200px"
      />
      {/* public klasörüne eklenen resimler direk alttaki gibi kısa yol ile yazılabilir */}
      <img className="img" src="./assets/background.jpg" alt="" />
    </div>
  );
};

export default Msg;
