import "./App.scss";
import React from "react";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

import data from "./data";

function App() {
  return (
    <div>
      <Header />
      <Card cardData={data} />
    </div>
  );
}

export default App;
