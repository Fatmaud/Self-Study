import "./App.css";

//!bootstrap import: (index.js ye de yapilabilir)
import "bootstrap/dist/css/bootstrap.min.css";
import dataA from "./data";

import React from "react";
import CourseCard from "./components/CourseCard";
import MyNavbar from "./components/MyNavbar";
import Slider from "./components/Slider";

// console.log(dataA);
const App = () => {
  return (
    <div>
      <MyNavbar />
      <Slider />
      <CourseCard veri={dataA} />
    </div>
  );
};

export default App;
