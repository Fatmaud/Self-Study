import React, { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";

const Home = () => {
  //!local storage dan veri cekerek useState initial value olusturma:
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("tasks")) || Data
  );

  return (
    <div>
      <GorevEkle todos={todos} setTodos={setTodos} />
      <GorevleriGoster todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
