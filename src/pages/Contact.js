import React from 'react';
import Title from '../components/Title'
import { 
  Form,
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Axios from 'axios';


class Contact extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      result: null,
      isDisabled: false
    }
  }

  send = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
        disabled: true
    });

    Axios.post('http://localhost:3030/api/email', this.state)
        .then(res => {
            if(res.data.success) {
                this.setState({
                   isDisabled: true,
                    result: true
                });
            } else {
                this.setState({
                   isDisabled: false,
                    result: false
                });
            }
        })
        .catch(err => {
            console.log(err);

            this.setState({
                disabled: false,
                emailSent: false
            });
        })

}

  update = (event) => {

    const target = event.target;
    const string = target.value;
    const field = target.name
    
    this.setState({
      [field]: string
    })
  }
  
  render() {
    return (
      <div>
        <Title title={this.props.title} subTitle={this.props.subTitle}/>
        <Container fluid={true}>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form onSubmit={this.send}>
                <Form.Group>
                  <Form.Label htmlFor='name'>Name:</Form.Label>
                  <Form.Control id='name' name='name' type='text' onChange={this.update} value={this.state.name}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='email'>Email:</Form.Label>
                  <Form.Control id='email' name='email' type='email' onChange={this.update} value={this.state.email}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='message'>Message:</Form.Label>
                  <Form.Control id='message' name='message' rows="4" as='textarea' onChange={this.update} value={this.state.message}/>
                </Form.Group>
                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.isDisabled}>
                  Send
                </Button>

                {this.state.result === true && <p className="d-inline emailResult">Email Sent</p>}
                {this.state.result === false && <p className="d-inline emailResult">Email Failed to Send</p>}

              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



}
export default Contact