import React, {Component} from 'react';
import {
    Badge,Row,Col,Card,Dropdown,Form,DropdownToggle,FormInput,
    InputGroup,Input,FormGroup,Label,CardHeader,CardBody,
    Table,Pagination,DropdownMenu,PaginationItem,PaginationLink
} from 'reactstrap';
let array = [];
class Questions extends Component {
        constructor() {
          super();
          this.state = {
            FormName: '',
            FieldType : [],
          };
          this.handleNameChange=  this.handleNameChange.bind(this);
         // this.handleSubmit = this.handleSubmit.bind(this);
          this.HandleFormFields = this.HandleFormFields.bind(this);
        }
        HandleFormFields(evt){   
            array.push(evt.target.value);
            this.state.FieldType = array;
            console.log(this.state);
            this.setState({
                FieldType: [...this.state.FieldType, evt.target.value]
              })
            this.ShareInput = this.state.FieldType.map((feild ,idx) =>{
                if(feild == "Input Text"){
                    return(
                        <div >
                        <input
                          type="text"
                           />
                        {/* <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button> */}
                      </div>
                    );
                } 
                if(feild == "Mulitple Choice"){
                    return(
                        <div>
                       <FormGroup row>
                       <Col md="3">
                         <Label>Inline Radios</Label>
                       </Col>
                       <Col md="9">
                         <FormGroup check inline>
                           <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1"/>
                           <Label className="form-check-label" check htmlFor="inline-radio1">One</Label>
                         </FormGroup>
                         <FormGroup check inline>
                           <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2"/>
                           <Label className="form-check-label" check htmlFor="inline-radio2">Two</Label>
                         </FormGroup>
                         <FormGroup check inline>
                           <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3"/>
                           <Label className="form-check-label" check htmlFor="inline-radio3">Three</Label>
                         </FormGroup>
                       </Col>
                     </FormGroup>
                        {/* <button type="button" onClick={this.handleRemoveShareholder} className="small">-</button> */}
                      </div>
                    );
                }  
            }) 
        }
        handleNameChange(evt) {
            const name1 = evt.target.value;
          this.setState({ FormName : name1 });
        }
        // handleSubmit(evt) {
        //   const { FormName, FieldType } = this.state;
        //   alert(`Incorporated: ${FormName} with ${FieldType.length} FieldType`);
        // }
        render() {   
          return (
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
                  <option value="Mulitple Choice">Check Box</option>
                </Input>
              </InputGroup>
            </Col>
           <FormGroup>
              {this.ShareInput}
             </FormGroup>
               <button type="submit">Submit</button>
            </form>
             </div>
          )
        }
      }
export default Questions;



//class IncorporationForm extends React.Component 
  
 {/*             
              {this.state.FieldType.map((shareholder, idx) => (
                <div className="shareholder">
                  <input
                    type="text"
                    //placeholder={`Shareholder #${idx + 1} FormName`}
                    value={shareholder.FormName}
                    onChange={this.handleShareholderNameChange(idx)}
                  />
                  <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
                </div>
              ))} */}












            