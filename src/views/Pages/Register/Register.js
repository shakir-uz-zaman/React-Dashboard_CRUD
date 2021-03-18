import React, { Component } from 'react';
import ProductService from '../../../services/ProductService';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
          name:'',
          email:'',
          password:'',
          passwordconfirm:'',
    }

    this.registerOrFail = this.registerOrFail.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changePasswordConfirmHandler = this.changePasswordConfirmHandler.bind(this);
    this.loginNow = this.loginNow.bind(this);

}

registerOrFail=(event)=>{
  event.preventDefault();
  let register = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation:this.state.password_confirmation,
  };
  ProductService.Register(register).then(response =>{
     if(response.status==201)
     {
      
      localStorage.setItem('registered', true);

      this.props.history.push('/login');
     }
     else{
       alert("Registration failed");
     }

    //
});
}
loginNow=(event)=>{
  this.props.history.push('/login');
}
changeNameHandler=(event)=>{
  this.setState({name: event.target.value});
}
changeEmailHandler=(event)=>{
  this.setState({email: event.target.value});
}
changePasswordHandler=(event)=>{
  this.setState({password: event.target.value});
}
changePasswordConfirmHandler=(event)=>{
  this.setState({password_confirmation: event.target.value});
}
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" maxLength="50" onChange={this.changeNameHandler} autoComplete="username"  required />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email" onChange={this.changeEmailHandler}  autoComplete="email"  required />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" onChange={this.changePasswordHandler} required   />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password"  onChange={this.changePasswordConfirmHandler} required  />
                    </InputGroup>
                    <Button color="success"  onClick={this.registerOrFail} block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button  onClick={this.loginNow} className=" mb-1" block><span>Login Here</span></Button>
                    </Col>
                    {/* <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col> */}
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
