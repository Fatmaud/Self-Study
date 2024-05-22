import React from "react";
import HeaderS, { Links } from "./style/HeaderStyle";
import DivStyle from "./style/ContainerStyle";
import ButtonS, { TomatoButton } from "./style/ButonStyle";

const Home = () => {
  return (
    <DivStyle>
      <HeaderS>STYLED COMPONENTS</HeaderS>
      {/*ButtonS lere props gönderidik. Herhangi bir sekilde isimlendirebiliriz. */}

      <Links href="#">LINK </Links>
      <ButtonS primary>TIKLA1</ButtonS>
      <ButtonS secondary>TIKLA2</ButtonS>
      <ButtonS>TIKLA3</ButtonS>
      <TomatoButton what>TIKLA4</TomatoButton>
      <TomatoButton>TIKLA5</TomatoButton>
    </DivStyle>
  );
};

export default Home;
