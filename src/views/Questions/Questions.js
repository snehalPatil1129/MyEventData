import React, { Component } from 'react';
import {
  Badge, Row, Col, Card, Dropdown, Form, DropdownToggle, FormInput,
  InputGroup, Input, FormGroup, Label, CardHeader, CardBody, Container,
  Table, Pagination, DropdownMenu, PaginationItem, PaginationLink, InputGroupAddon, InputGroupText, Button
} from 'reactstrap';
import InputField from './InputField';

let array = [];
let idx = 1;
let Section = [];
let AAA = [];
let BBB = [];
let ShareInput = [];
let QuestionArea = [];
class Questions extends Component {
  constructor() {
    super();
    this.state = {
      FormName: '',
      Questions: [],
    };
    this.Section = [];
    this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  //  this.HandleFormFields = this.HandleFormFields.bind(this);
    this.HandleAddQuestion = this.HandleAddQuestion.bind(this);
    this.callChildMethod =  this.callChildMethod.bind(this);
    //this.RenderSection = this.RenderSection.bind(this);
  }

  callChildMethod(evt){
    this.child.HandleFormFields(evt);
  }

  HandleAddQuestion(evt) {
    if (this.state.Questions.length == 0) {
      this.state.Questions.push({ QueId: idx , QuestionTitle: '', AnswerFeild: '' });
    }
    else {
      this.state.Questions.push({ QueId: (++idx) , QuestionTitle: '', AnswerFeild: '' });
    }
    this.AddQuestionArea = this.state.Questions;
    this.setState({
      Questions: this.AddQuestionArea
    })
  /// console.log('state',this.state);
    QuestionArea = this.state.Questions.map((Que, idx) => {
      return (
        <div>
        <div id={Que.QueId}>
          <h4>Question No {Que.QueId}</h4>
          <FormGroup row>
            <Col xs="12" md="6"   >
              <InputGroup >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-question"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Question Title" id={Que.QueId}  name="Question" />
              </InputGroup>
            </Col>
            <Col xs="12" md="6">
              <InputGroup className="mb-3">
                <Input type="select" defaultValue="Input Text" name="Conference" id={Que.QueId} placeholder="Feilds" onChange={this.callChildMethod} >
                  <option value="Input Text">Input Text</option>
                  <option value="Mulitple Choice">Mulitple Choice</option>
                  <option value="Check Box">Check Box</option>
                </Input>
              </InputGroup>
            </Col>
          
          </FormGroup>  
        </div>
      <div id={Que.QueId}>
        </div>
        <InputField  state={this.state} ref={(cd) => this.child = cd}/>
          </div>
      );
    })
    console.log(QuestionArea,"QuestionArea");
  }



  handleNameChange(evt) {
    const name1 = evt.target.value;
    this.setState({ FormName: name1 });
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <Card className="mx-6">
                <CardBody className="p-4">
                  <h1>Form</h1>
                  <FormGroup row>
                    <Col xs="12" md="6"   >
                      <InputGroup className="mb-3">
                        <Input type="text" placeholder="Form Title" onChange={this.handleNameChange} name="FormTitle" />
                      </InputGroup>
                    </Col>
                    <Col md="6"   >
                      <h4> <Badge color="primary" onClick={this.HandleAddQuestion} pill> <i className="icon-note"></i> Add Question</Badge></h4>
                    </Col>
                  </FormGroup>
                  <Row>
                    <Col xs="12" md="6"   >
                    <div  >
                      {QuestionArea}
                      </div>
                    </Col>
                  </Row>
                  {/* <Container>
                  <FormGroup row>
                    <Col xs="12" md="6"   >
                      <div>
                        {this.Section}
                      </div>
                    </Col>
                  </FormGroup>
                  </Container> */}
                  <FormGroup row>
                    <Col xs="6" md="3" >
                      <Button type="button" size="md" color="primary"  >Create Form</Button>
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
////////////////////handle////////////////////

//   HandleFormFields(evt,id) {
//    var AnswerFeild = (evt.target.value);
//    var Id = evt.target.id;
//   this.state.Questions.forEach(fItem =>{
//     if(fItem.QueId == Id){
//       fItem.AnswerFeild = AnswerFeild;
//     }
//   })
// this.arr = this.state.Questions;
//   this.setState({Questions : this.arr});
//     ShareInput = this.state.Questions.map((feild, idx) => {
//       if (feild.AnswerFeild == "Input Text") {
//         return (
//           <div id={feild.QueId} key={feild.QueId} >
//             <input
//               type="text"
//               id={feild.QueId}
//             />
//           </div>
//         );
//       }
//       if (feild.AnswerFeild == "Mulitple Choice") {
//         return (
//           <div id={feild.QueId} key={feild.QueId}>

//             <FormGroup row>
//               <Col md="3">
//                 <Label>Inline Radios</Label>
//               </Col>
//               <Col md="9">
//                 <FormGroup check inline>
//                   <Input className="form-check-input" type="radio"  id={feild.QueId} name="inline-radios" value="option1" />
//                   <Label className="form-check-label" check htmlFor="inline-radio1">One</Label>
//                 </FormGroup>
//                 <FormGroup check inline>
//                   <Input className="form-check-input" type="radio"  id={feild.QueId} name="inline-radios" value="option2" />
//                   <Label className="form-check-label" check htmlFor="inline-radio2">Two</Label>
//                 </FormGroup>
//                 <FormGroup check inline>
//                   <Input className="form-check-input" type="radio"  id={feild.QueId} name="inline-radios" value="option3" />
//                   <Label className="form-check-label" check htmlFor="inline-radio3">Three</Label>
//                 </FormGroup>
//               </Col>
//             </FormGroup>
//           </div>
//         );
//       }
//       if (feild.AnswerFeild == "Check Box") {
//         return (
//           <div id={feild.QueId} key={feild.QueId}>
//             <FormGroup check inline>
//               <Label check>
//                 <Input type="checkbox"  id={feild.QueId} /> Some input
//              </Label>
//             </FormGroup>
//             <FormGroup check inline>
//               <Label check>
//                 <Input type="checkbox"  id={feild.QueId} /> Some other input
//              </Label>
//             </FormGroup>
//           </div>
//         )
//       }
//     })
// console.log('inputfeild', ShareInput);

//   }
////////////////////////////////////








{/* <div className="animated fadeIn">
<Container>
    <Row className="justify-content-center">
        <Col md="12">
            <Card className="mx-6">
                <CardBody className="p-4">
                    <h1>Room</h1>
                    <FormGroup row>
                        <Col xs="12" md="6" className={(submitted && !Room.RoomName ? ' has-error' : '')}  >
                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-home"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="Room Name" name="RoomName" value={this.state.Room.RoomName} onChange={this.changeFunction} />

                                {submitted && !Room.RoomName &&
                                    <div className="help-block">Room Name is required</div>
                                }

                            </InputGroup>
                        </Col>
                        <Col md="6"  >
                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="icon-pie-chart"></i></InputGroupText>
                                </InputGroupAddon>
                                <Input type="number" placeholder="Capacity" name="Capacity" value={this.state.Room.Capacity} onChange={this.changeFunction} />
                            </InputGroup>
                            {submitted && !Room.Capacity &&
                                <div className="help-block">Capacity is required</div>
                            }
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col xs="12"  md="6"  >
                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="icon-pie-chart"></i></InputGroupText>
                                </InputGroupAddon>
                                <Input type="number" placeholder="Buffer Capacity" name="bufferCapacity" value={this.state.Room.bufferCapacity} onChange={this.changeFunction} />
                            </InputGroup>
                        </Col>
                        <Col  md="6" className={(submitted && !Room.AvailableServices ? ' has-error' : '')}>
                            <FormGroup>
                                <Select
                                    multi
                                    onChange={this.handleSelectChange}
                                    placeholder="Select Services"
                                    simpleValue
                                    value={value}
                                    options={options}
                                />
                            </FormGroup>
                        </Col>                                      
                        </FormGroup>
                    <FormGroup row>
                        <Col xs="6" md="3" >
                            <Button type="button" size="md" color="primary" onClick={this.submitFunction} >Create Room</Button>
                        </Col>
                        <Col md="3">
                            <Button onClick={this.resetField} type="reset" size="md" color="danger" ><i className="fa fa-ban"></i> Reset</Button>
                        </Col>
                    </FormGroup>
                </CardBody>
            </Card>
        </Col>
    </Row>
</Container>
</div>













//////////////////////////////////////////////

<div>
<form onSubmit={this.handleSubmit}>
  <Col xs="12" >
    <input
      type="text"
      placeholder="Form Name"
      value={this.state.FormName}
      onChange={this.handleNameChange}
    />
  </Col>

  <h4>Add Questions</h4>
  <Col xs="12" md="6">
    <InputGroup className="mb-3">
      <Input type="select" name="Conference" id="Conference" placeholder="Feilds" onChange={this.HandleFormFields}>
        <option value="">Select Feilds</option>
        <option value="Input Text">Input Text</option>
        <option value="Mulitple Choice">Mulitple Choice</option>
        <option value="Check Box">Check Box</option>
      </Input>
    </InputGroup>
  </Col>
  <FormGroup>
    {this.ShareInput}
  </FormGroup>
  <button type="submit">Submit</button>
</form>
</div>










 */}
