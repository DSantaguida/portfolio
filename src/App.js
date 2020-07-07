import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';
import './bootstrap-social.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


class App extends React.Component {

  constructor(props) {
    super(props);
    library.add(fab)
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
        title: 'Check out my projects!'
      },
      contact: {
        title: 'Any Questions?',
        subTitle: 'Let\'s Talk!'
      }
    }
}

  render() {

    return (
      <Router>
        <Container className="p-0 background" fluid={true}>
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
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} subTitle={this.state.contact.subTitle}/>} /> 
          <Footer/>
        </Container>

      </Router>
      );

  }

 
}

export default App;
