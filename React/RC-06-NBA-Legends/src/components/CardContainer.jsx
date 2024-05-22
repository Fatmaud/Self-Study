import React, { useState } from "react";
import { data } from "../helper/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  //map le döndürdügümüz datayi burada div acarak da bastirabiliriz. O zaman map ten sonra return parantezinin icine ekrana bastirilacaklari yazmaliyiz. Biz child a props göndererek ekrana yazdiracgz.

  const [search, setSearch] = useState("");

  //!I.Yol: return disinda, js alaninda yapildigi icin let ile dizi tanimlayip data ya atamamiz gerekiyor, data const ile tanimlandigi icin(--ya da datayi export kisminda let ile tanimlamak gerekiyor).Bu sekilde asagida map ile dönerken yeni deger dizi ile dönecek.
  //let dizi = data;
  // dizi = dizi.filter((a) => a.name.includes(search));
  //!II. Yol: mapten önce diziyi filtrelemek: card-container in icinde⬇️⬇️⬇️

  return (
    <>
      <Form.Control
        className="w-60 m-auto"
        type="search"
        placeholder="Search Player"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container p-3 rounded-3 my-4">
        <Row className="g-3 justify-content-center">
          {/* I.YOL: {dizi.map((player, index) => { */}
          {data
            .filter((a) =>
              a.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, index) => {
              return (
                <Col key={index} md={6} lg={4} xl={3}>
                  {/* <PlayerCard player={player}></PlayerCard> */}
                  <PlayerCard {...player}></PlayerCard>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
