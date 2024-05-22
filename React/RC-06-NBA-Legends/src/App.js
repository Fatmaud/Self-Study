import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"; //bu kez index.js e import ettik.
import Header from "./components/Header";
import { Container } from "react-bootstrap"; //div yerine -- alternatif-- react-bootstrap ten container import ediyoruz. Bu Container react-bootstrap componenti oldugu icin, built-in özellikleri almak icin import etmek zorundayiz.
import CardContainer from "./components/CardContainer";

const App = () => {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer />
    </Container>
  );
};

export default App;
