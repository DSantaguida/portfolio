import React from 'react';
import {
  Container
} from 'react-bootstrap';
import Title from '../components/Title';
import About from '../components/About';

function Home(props){
  return (
    <Container fluid={true}>
    <Title title={props.title} subTitle={props.subTitle} text={props.text}/>

    <About/>
   </Container>
  );

}
export default Home