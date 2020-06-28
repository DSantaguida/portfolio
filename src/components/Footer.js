import React from 'react';
import {
  Container,
  Row
} from 'react-bootstrap';

function footer(){

  return(

    <footer className="mt-5">
      <Container fluid={true} className='fixed-bottom'> 
        <Row className='justify-content-md-left foot topFoot' >
            Daniel Santaguida
        </Row>
        <Row className='justify-content-md-left foot'>
            Ontario, Canada
        </Row>
        <Row className='justify-content-md-left foot'>
            (647)-773-6186
        </Row>
        <Row className='justify-content-md-left foot bottomFoot'>
            dsantaguida@outlook.com
        </Row>
      </Container>
    </footer>

  )

}

export default footer;