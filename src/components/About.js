import React from 'react';
import {
  Row,
  Col,
  Container,
  Image
} from 'react-bootstrap';

function About(){

  return(
    <Container>
      <Row className="abPadding">
        <Col> 
          <Row>
            <div className="text-left border-left about bodyParagraph">Hi! My name is Daniel Santaguida. I'm currently a Software Engineering student at York University's Lassonde School of Engineering. My experience in the software industry comes from the internship I completed at IBM, as well as the personal projects I have completed on the side.
            </div>  
          </Row>
          <Row>
            <div className="text-left border-left about">
            I am most experienced programming in Java, but I am also proficient in C, Python, JavaScript, and HTML/CSS. Other tools I have experience using include Git, Gradle, Jenkins, Travis, Docker, Kubernetes, and Artifactory.
            </div>
          </Row>
        </Col>
        <Col className="text-center">
          <Image src="me.jpg" rounded/>
        </Col>
      </Row>
    </Container>

  );

} 

export default About;