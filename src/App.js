import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col
} from 'react-bootstrap'
import './App.css';

import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Daniel Santaguida',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'About Me',
      },
      projects: {
        title: '<Insert title here>'
      },
      contact: {
        title: '<Insert title here>'
      }
    }
}

  render() {

    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar bg="primary" variant="dark" className="border-bottom" expand="lg">
            <Navbar.Brand>Daniel Santaguida</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
            
          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} /> 
          <Route path="/projects" exact render={() => <Projects title={this.state.projects.title}/>} /> 
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title}/>} /> 


          <Footer/>
          

        </Container>

      </Router>
      );

  }

 
}

export default App;
