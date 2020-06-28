import React from 'react';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';

function About(){

  return(
    <Container>
      <Row>
        <Col className="border-left"> 
          <p className="text-left">Hi! My name is Daniel Santaguida. I'm currently a Software Engineering student at York University's Lassonde School of Engineering. 
        </p>
        </Col>
        <Col>
          <p>test2</p>
        </Col>
      </Row>
    </Container>

  );

} 

export default About;