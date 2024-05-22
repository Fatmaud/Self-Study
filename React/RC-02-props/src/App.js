import "./App.css";

import React from "react";
import Person from "./Person";

const App = () => {
  return (
    <div>
      <Person
        name="Ayse Bilir"
        img="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg"
        phone="555-55-55"
      />
      <Person
        name="Osman Kara"
        img="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg"
        phone="555-44-44"
      />
    </div>
  );
};

export default App;
