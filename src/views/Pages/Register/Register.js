import React, { Component } from 'react'
import { Label, CardHeader, Container,CardGroup, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon, InputGroupText, FormGroup } from 'reactstrap';
import { Auth } from '../../../services/Authentication/Auth';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { DBUtil } from '../../../services/datastore/Datastore';
import { ToastContainer, toast } from 'react-toastify';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        Password : "",
        emailId : "",
        firstName : "",
        lastName : "",
        contactNo : ""
      },
      registerError: "",
     // ErrorPresent: false
    };
    this.OnChange = this.OnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onResetField =  this.onResetField.bind(this);
    this.addUsertoData =  this.addUsertoData.bind(this);
    

  }
  OnChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }
  handleSubmit(e) {
    e.preventDefault()
    let CompRef = this;
    let email = this.state.user.emailId;
    let pwd = this.state.user.Password;
    Auth.auth(email , pwd ,function(resp){
      toast.success("User registered successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
    CompRef.addUsertoData();
    CompRef.props.history.push('/login');
    },
    function(err){
      CompRef.setState({registerError : err.message});
      console.log('Error' , err);
  });
}
addUsertoData(){
  let user = {
    firstName: this.state.user.firstName,
    lastName: this.state.user.lastName,
    contactNo: this.state.user.contactNo,
    emailId: this.state.user.emailId,
  }

  let tableName = "Users";

  DBUtil.addObj(tableName , user, function (response) {

      // compRef.props.history.push('/user');
  },
  function(err){
    console.log('Error' , err);
  });


}
  onResetField() {
    this.setState({
      user: {
        Password: "",
        emailId: "",
        firstName: "",
        lastName: "",
        contactNo: ""
      },
      registerError: ""
    });
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
                  <h1>Register</h1>
                    <p className="text-muted">Register to create new account</p>
                <form name="form" onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Col md="6" >
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="First Name" name="firstName" value={this.state.user.firstName}
                          onChange={this.OnChange} />
                      </InputGroup>
                    </Col>
                    <Col md="6" >
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Last Name" name="lastName" value={this.state.user.lastName}
                          onChange={this.OnChange} />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <br />
                  <FormGroup row>
                    <Col md="6" >
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email Id" name="emailId" value={this.state.user.emailId}
                          onChange={this.OnChange} />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-phone"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="Contact Number " name="contactNo" value={this.state.user.contactNo}
                          onChange={this.OnChange} />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <br />
                  <Row>
                    <Col xs="12" md="6" >
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="Password" value={this.state.user.Password}
                          onChange={this.OnChange} />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                    {
                          this.state.registerError &&
                          <div className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span>
                            &nbsp;{this.state.registerError}
                          </div>
                        }
                    </Col>
                  </Row>
               
                  <br />
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Button type="submit" color="success">Register</Button>
                      &nbsp;&nbsp;
                       <Button onClick={this.onResetField} color="danger"><i className="fa fa-ban"></i> Reset</Button>
                    </Col>
                  </Row>
                </form>
                </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <ToastContainer autoClose={1000} />
      </div>
    )
  }
}
