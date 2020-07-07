import React from 'react';
import {
  Jumbotron,
  Row,
  Col,
  Container
} from 'react-bootstrap';

function Title(props){
  
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid pb-0 pt-3">
      <Container>
        <Row>
          <Col className="text-center border-bottom">
            {props.title && <h1>{props.title}</h1>}
            {props.subTitle && <h2>{props.subTitle}</h2>}
            {props.text && <h3>{props.text}</h3>}
          </Col>
        </Row>

      </Container>
    </Jumbotron>
  );

} export default Title;