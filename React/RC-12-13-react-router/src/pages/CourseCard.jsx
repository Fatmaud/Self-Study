import React from "react";
import data from "../data.js";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CourseCard = () => {
  //!react-bootstrap ten CourseCard componenti
  //!
  const navigate = useNavigate();
  return (
    <Container className="text-center">
      <Row>
        {data.map(({ img, name, text, id }) => {
          return (
            <Col
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="danger" onClick={() => navigate(`/courses/${name}`)}>
                    DETAILS
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
