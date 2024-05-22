import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} />
      <h1 className="my-2 font-monospace">NBA Legends</h1>
    </Container>
  );
};

export default Header;
