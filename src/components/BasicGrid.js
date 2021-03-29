import { Col, Container, Row } from "react-bootstrap";

function BasicGrid(props) {
  return (
      <Container>
        <Row>
          <Col xm={0} sm={2} />
          <Col xs={12} sm={8}>
            {props.children}
          </Col>
          <Col xm={0} sm={2} />
        </Row>
      </Container>
  );
};

export default BasicGrid;
