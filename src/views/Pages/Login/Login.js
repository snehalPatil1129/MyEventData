import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,Link, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
//import { Label, CardHeader, Container,CardGroup, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon, InputGroupText, FormGroup } from 'reactstrap';
import { Auth } from '../../../services/Authentication/Auth';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { DBUtil } from '../../../services/datastore/Datastore';
import { ToastContainer, toast } from 'react-toastify';


class Login extends Component {
  constructor(props)
  {
      super(props);
      this.state= {
        user :{
          emailId : "",
          Password:""
        },
        loginMessage : ""
      }
      this.onHandleChange = this.onHandleChange.bind(this);
      this.onRegister =this.onRegister.bind(this);
      this.submit = this.submit.bind(this);
      this.onForgetPassword = this.onForgetPassword.bind(this);
  }

onHandleChange(event){
  const { name, value } = event.target;
  const { user } = this.state;
  this.setState({
    user: {
      ...user,
      [name]: value
    }
  });
}

onRegister(){
  this.props.history.push('/register');
}
submit(){
 // e.preventDefault()
  let CompRef = this;
  let email = this.state.user.emailId;
  let pwd = this.state.user.Password;
  if (email && pwd) {
    Auth.login(email, pwd, function (resp) {
      //console.log('resp', resp);
      CompRef.props.history.push('/dashboard');
    },
      function (err) {
       // console.log('Error', err);
        CompRef.setState({ loginMessage: "Invalid Email/Password" });
      });
  }
  else{
    CompRef.setState({loginMessage : "Please enter Email Id and password"});
  }
 
}
onForgetPassword() {
  let CompRef = this;
  let email = this.state.user.emailId;
  if(email){
    Auth.resetPassword(email, function (resp) {
      //console.log('resp', resp);
    },
      function (err) {
       // console.log('Error', err);
        CompRef.setState({loginMessage : err.message});
      });
  }
  else{
    CompRef.setState({loginMessage : "Please enter Email"});
  }
 
}


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email Id" name="emailId" onChange={this.onHandleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password"  name="Password" onChange={this.onHandleChange}/>
                    </InputGroup>
                    {
                          this.state.loginMessage &&
                          <div className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span>
                            &nbsp;{this.state.loginMessage}
                           
                          </div>
                        }

                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.submit}>Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" onClick={this.onForgetPassword} className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>New Member ? Please sign up ...</p>
                      {/* <Link to={`${this.props.match.url}/userForm`}> */}
                        <Button color="primary" onClick={this.onRegister} className="mt-3" active>Register Now!</Button>
                      {/* </Link> */}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
