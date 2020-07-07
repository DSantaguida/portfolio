import React from 'react';
import {
  Container,
  Row
} from 'react-bootstrap';

import Social from './Social';






function footer(){

  return(
    <Container className="footerContainer" fluid={true}>
      <footer className="mt-5" class="outerfoot">
        <Container fluid={true}> 
          <Row className='justify-content-md-left foot'>
            Daniel Santaguida<br/>
            Ontario, Canada<br/>
            (647)-773-6186<br/>
            dsantaguida@outlook.com<br/>
            <Social icon ='twitter' link='https://twitter.com/dansantaguida'/>
            <Social icon ='instagram' link='https://instagram.com/dansantaguida'/>
            <Social icon ='linkedin' link='https://www.linkedin.com/in/daniel-santaguida/'/>
            <Social icon ='github' link='https://github.com/DSantaguida'/>
          </Row>
        </Container>
      </footer> 
    </Container> 

  );

}

export default footer;