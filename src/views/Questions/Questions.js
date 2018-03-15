import React, { Component } from 'react';
import {
  Badge, Row, Col, Card, Form, FormInput,
  InputGroup, Input, FormGroup, Label, CardHeader, CardBody, Container,
  Table, InputGroupAddon, InputGroupText, Button
} from 'reactstrap';
//import InputField from './InputField';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { DBUtil } from '../../services';

let array = [];
let idx = 0;

let ShareInput = [];
class Questions extends Component {
  constructor() {
    super();
    this.state = {
      FormName: '',
      Questions: [],
    };
    this.Section = [];
    this.onNameChange = this.onNameChange.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.renderAnswerType = this.renderAnswerType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCapture = this.onCapture.bind(this);
    this.onAddQuestion = this.onAddQuestion.bind(this);
   this.onFieldChange = this.onFieldChange.bind(this);
    this.onInputValueChange =  this.onInputValueChange.bind(this);
  
  }

  onSubmit(evt){
    console.log('Event details',this.state);
    ////////
    let form = this.state;
    // if (form.FormName && form.Questions) {
      let componentRef = this;
      let tableName = "Que";
      let docName = form.FormName;
      let doc = {
        Questions : form.Questions
      }

      DBUtil.addDoc(tableName, docName, doc, function () {          //add doc to firebase
        console.log('added');
        componentRef.props.history.push('/login');
      },
        function (err) {
          console.log('Error', err);
        });
    }
    /////////
  
  onCapture(event , id){
    let fieldName = parseInt(event.target.name);
    let fieldId =  parseInt(event.target.id);
    let opts = this.state.Questions;
    opts[fieldId].value[fieldName] = ({  fieldName : fieldName    , Value : event.target.value});
    this.setState({
      Questions : opts
    })
   // console.log('choice ',opts , "ID" , id);
  }
  onInputValueChange(event, id) {
    let tempQuestions = this.state.Questions;
    tempQuestions[id].AnswerFeild = event.target.value;
    this.setState({Questions: tempQuestions});
   // console.log('Question', tempQuestions);
  }

 onFieldChange(event){
   let QueTitle = event.target.value;
   let QueId =event.target.id;
   this.state.Questions[QueId].QuestionTitle = QueTitle; 
  // console.log('Question Data', this.state);
 }
  onAddQuestion(evt) {
    let tempQuestions = this.state.Questions;
    if (tempQuestions.length == 0) {
      tempQuestions.push({ QueId: idx , QuestionTitle: '', AnswerFeild: '' , value: [] });
    }
    else {
      tempQuestions.push({ QueId: (++idx) , QuestionTitle: '', AnswerFeild: '', value: [] });
    }
    this.setState({
      Questions: tempQuestions
    })
  // console.log('state changed',this.state);
  }



  onNameChange(evt) {
    const name1 = evt.target.value;
    this.setState({ FormName: name1 });
  }
  
  renderAnswerType(question) {
    if ( question.AnswerFeild == 'Input Text') {
      return (
        <div>
          <FormGroup row>
            <Col xs="12" md="6" >
              <InputGroup >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-note"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Answer Title" id={question.QueId} name="Answer" />
              </InputGroup>
            </Col>
          </FormGroup>
        </div>
      )  
    } else if ( question.AnswerFeild == 'Mulitple Choice') {
      return (
        <div>
          <FormGroup row>
            <Col xs="12" md="3">
              <Label>Add Choices :  </Label>
            </Col>
            <Col md="9">
              <FormGroup check inline>
                <Input className="form-check-input" type="radio" id={question.QueId} name="inline-radios" value="option1" />
                <Input type="text" placeholder="Title" id={question.QueId} name = "0" key="1"  onChange={(event) => this.onCapture(event, idx )} />
              </FormGroup>
              <FormGroup check inline>
                <Input className="form-check-input" type="radio" id={question.QueId} name="inline-radios" value="option2" />
                <Input type="text" placeholder="Title" id={question.QueId} name="1"  key="2" onChange={(event) => this.onCapture(event, idx)} />

              </FormGroup>
              <FormGroup check inline>
                <Input className="form-check-input" type="radio" id={question.QueId} name="inline-radios" value="option3" />
                <Input type="text" placeholder="Title" id={question.QueId} name="2"  key="3" onChange={(event) => this.onCapture(event, idx)} />

              </FormGroup>
            </Col>
          </FormGroup> 
          </div>
      )  
    } else if ( question.AnswerFeild == 'Check Box') {
      return (
        <div> 
          <FormGroup row>
            <Col xs="12" md="3">
              <Label>Check Box</Label>
            </Col>
            <Col md="9">
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id={question.QueId} /> 
                            </Label>
                            <Input type="text" placeholder="Title" id={question.QueId} name = "0" key="1"  onChange={(event) => this.onCapture(event, idx )} />

              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id={question.QueId} /> 
                            </Label>
                            <Input type="text" placeholder="Title" id={question.QueId} name = "1" key="1"  onChange={(event) => this.onCapture(event, idx )} />

              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id={question.QueId} />
                            </Label>
                            <Input type="text" placeholder="Title" id={question.QueId} name = "2" key="1"  onChange={(event) => this.onCapture(event, idx )} />

              </FormGroup>
            </Col>
          </FormGroup>
        </div>
      )  
    }
    return (
      <div />
    );
  }

  renderQuestions() {
    let questionArea = this.state.Questions.map((Que, idx) => {
      return (
        <div key={idx}>
          <div id={Que.QueId}>
            <h4>Question No {Que.QueId}</h4>
            <FormGroup row>
              <Col md="12" md="6"   >
                <InputGroup >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-question"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="text" placeholder="Question Title" id={Que.QueId} onChange={this.onFieldChange} name="Question" />
                </InputGroup>
              </Col>
              <Col xs="12" md="3">
                <InputGroup className="mb-3">
                  <Input type="select"  name="InputField" id={Que.QueId} placeholder="Feilds" onChange={(event) => this.onInputValueChange(event, idx)} >
                  <option value=" ">--Select--</option>
                    <option value="Input Text">Input Text</option>
                    <option value="Mulitple Choice">Mulitple Choice</option>
                    <option value="Check Box">Check Box</option>
                  </Input>
                </InputGroup>
              </Col>
            </FormGroup>  
          </div>
        {/* <div id={Que.QueId}>
        </div> */}
        {this.renderAnswerType(Que)}
        {/* <InputField  state={this.state} ref={(cd) => this.child = cd}/> */}
          </div>
      );
    });
    return questionArea;
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <Card className="mx-12">
                <CardBody className="p-6">
                  <h1>Form</h1>
                  <FormGroup row>
                    <Col xs="12" md="6"   >
                      <InputGroup className="mb-3">
                        <Input type="text" placeholder="Form Title" onChange={this.onNameChange} name="FormTitle" />
                      </InputGroup>
                    </Col>
                    <Col md="6"   >
                      <h4> <Badge color="primary" onClick={this.onAddQuestion} pill> <i className="icon-note"></i> Add Question</Badge></h4>
                    </Col>
                  </FormGroup>
                  <Row>
                    <Col xs="12" md="12"   >
                      <div  >
                        {this.renderQuestions()}
                      </div>
                    </Col>
                  </Row>
                  <FormGroup row>
                    <Col xs="6" md="3" >
                      <Button type="button" size="md" color="primary" onClick={this.onSubmit}  >Create Form</Button>
                    </Col>
                    <Col md="3">
                      <Button type="reset" size="md" color="danger" ><i className="fa fa-ban"></i> Reset</Button>
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Questions;
