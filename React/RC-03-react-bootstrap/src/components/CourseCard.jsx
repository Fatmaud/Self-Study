// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

import { Row, Container, Col, Card, Button } from "react-bootstrap";

//! react alanında döngü olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir
const CourseCard = ({ veri }) => {
  console.log(veri);

  return (
    <Container>
      <Row>
        {veri.map(({ img, name, text, id }) => {
          //!arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz
          //?database den çekilen veriler ekrana bastırılırken, en dış div unique bir veri ister bunu da key={id} şeklinde yazarız. id olmak zorunda değil unique herhangi bir property olabilir, mesela img

          return (
            <Col
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              //⬇️react-bootstrap responsive⬇️
              // sm={12}
              // md={6}
              // lg={4}
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="primary">Details</Button>
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
