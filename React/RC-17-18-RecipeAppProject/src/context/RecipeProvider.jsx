import axios from "axios";
import React, { createContext, useState } from "react";

//! 1--context alani create etme:

export const RecipeContext = createContext();
const APP_ID = "07d22488";
const APP_KEY = "fdccb232585a9f8e5910b3a163be3a4c	";

//!artik daha trend kullanim context in ayri bir sayfada yazilip app jste AppRouter i yoksa App jsteki component/page leri sarmallamasi. Biz de context alanini  bu sekilde ayri sayfada olusturduk:

const RecipeProvider = ({ children }) => {
  //?localStoragedan gelen username ve password state teki name ve password icin value oldu= Degerleri localStorage tan cektik. (su asamada local storage a yazilmis bir name/password yok. olmadigi durumlarda da bos string gelecek.)

  //! login ve privateRouterda kullanilacak veriler:

  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  //!home, header ve recipeCard a aktarilacak veriler:

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState(); //query i home sayfasindaki search input alanindan (e.target.value) alacagiz.
  const [mealType, setmealType] = useState("breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  //getData();bu sekilde cagirmak app i sonsuz döngüye sokar. Biz bu fonksiyonu zaten header componentinde cagirip search butonuna baglayacagiz. Bir kosula bagli yapinca da sonsuz döngüye girmyecegi icin useEffect kullanmayacgiz.

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
      // console.log(data.hits); //!query kismi bos oldugu icin clg arrayi bos döndürüyor.
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <p style={{ textAlign: "center" }}>Oops! Something went wrong😒</p>;
  }
  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }
  return (
    //! 2-- Context Provider
    <RecipeContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        recipes,
        setQuery,
        setmealType,
        getData,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );

  //!Context sayfasi provider olarak children ini return eder. value kisminda childrenlara gönderilecek veriler listelenir.
};

export default RecipeProvider;
