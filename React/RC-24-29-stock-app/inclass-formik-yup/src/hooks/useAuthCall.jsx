import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  //custom hooklar jsx alani return etmez;componentler eder.

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://18101.fullstack.clarusway.com/users/",
        userInfo
      );
      console.log(data);
      dispatch(registerSuccess(data));
      navigate("/stock"); //basarali giris yapildiktan sonra anasayfaya yönlendirme
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return { register };
};

export default useAuthCall;

// https://react.dev/learn/reusing-logic-with-custom-hooks

//! Birden fazla componentte aynı fonksiyona veya fonksiyonlara ihtiyacım varsa (fetch gibi) ve bu fonksiyonlar içerisinde hooklara ihtiyaç duyuyorsam dispatch,state gibi o zaman custom hook yazmak mantıklıdır.
//* custom hooklar "use" kelimesiyle başlar.
//+ custom hooklar jsx return etmez.
//* custom hookslar parametre alabilirler.
//? birden fazla değer veya fonksiyon paylaşabiliriz. Eğer tek bir değer veya fonskiyon paylaşacaksak return deger dememiz yeterli. Ama birden fazlaysa o zaman object içerisinde değerlerimi, fonksiyonlarımı paylaşabilirim.
//? Tek değer paylaştığımızda kullancağımız componentte direk olarka çağırabiliriz. Ama birden fazla değer paylaşıyorsak kullanırken destructuring yapmalıyız.
