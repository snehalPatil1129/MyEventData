import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, Dropdown, Form, DropdownToggle, FormInput,
    InputGroup, Input, FormGroup, Label, CardHeader, CardBody, Container,
    Table, Pagination, DropdownMenu, PaginationItem, PaginationLink, InputGroupAddon, InputGroupText, Button
} from 'reactstrap';


let ShareInput = [];

class InputField extends React.Component {


    HandleFormFields(evt, id) {
        var AnswerFeild = (evt.target.value);
        var Id = evt.target.id;
        this.props.state.Questions.forEach(fItem => {
            if (fItem.QueId == Id) {
                fItem.AnswerFeild = AnswerFeild;
            }
        })
        this.arr = this.props.state.Questions;
        this.setState({ Questions: this.arr });
        ShareInput = this.props.state.Questions.map((feild, idx) => {
            if (feild.AnswerFeild == "Input Text") {
                return (
                    <div id={feild.QueId} key={feild.QueId} >
                        <Col xs="12"  >
                            <InputGroup >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-note"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="Answer Title" name="Answer" />
                            </InputGroup>
                        </Col>
                    </div>
                );
            }
            if (feild.AnswerFeild == "Mulitple Choice") {
                return (
                    <div id={feild.QueId} key={feild.QueId}>

                        <FormGroup row>
                            <Col md="3">
                                <Label>Inline Radios</Label>
                            </Col>
                            <Col md="9">
                                <FormGroup check inline>
                                    <Input className="form-check-input" type="radio" id={feild.QueId} name="inline-radios" value="option1" />
                                    <Label className="form-check-label" check htmlFor="inline-radio1">One</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input className="form-check-input" type="radio" id={feild.QueId} name="inline-radios" value="option2" />
                                    <Label className="form-check-label" check htmlFor="inline-radio2">Two</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input className="form-check-input" type="radio" id={feild.QueId} name="inline-radios" value="option3" />
                                    <Label className="form-check-label" check htmlFor="inline-radio3">Three</Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                    </div>
                );
            }
            if (feild.AnswerFeild == "Check Box") {
                return (
                    <div id={feild.QueId} key={feild.QueId}>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" id={feild.QueId} /> Some input
                  </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" id={feild.QueId} /> Some other input
                  </Label>
                        </FormGroup>
                    </div>
                )
            }
        })
        console.log('inputfeild', ShareInput);
    }

    render() {
       
        this.state = this.state;
        return (
            <div>
                <FormGroup>
                {ShareInput}
</FormGroup>                </div>
            
        );
    }
  

}
export default InputField;

