import React from 'react';
import {
  Container,
  Row
} from 'react-bootstrap';
import Title from '../components/Title';
import ProjectEntry from '../components/ProjectEntry';

function Projects(props){
  return (
    <Container fluid={true}>
      <Title title={props.title}/>
      <Row>
        <ProjectEntry link="https://github.com/DSantaguida/" description="An online portfolio created with React.js, React Bootstrap, React Router, and SendGrid." image="/website.png"/>
        <ProjectEntry link="https://github.com/DSantaguida/" description="An online portfolio created with React.js, React Bootstrap, React Router, and SendGrid." image="/logo192.png"/>
        <ProjectEntry link="https://github.com/DSantaguida/" description="An online portfolio created with React.js, React Bootstrap, React Router, and SendGrid." image="/logo192.png"/>
        <ProjectEntry link="https://github.com/DSantaguida/" description="An online portfolio created with React.js, React Bootstrap, React Router, and SendGrid." image="/logo192.png"/>
      </Row>
    </Container>
  );

}
export default Projects