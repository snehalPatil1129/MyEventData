import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, Dropdown, Form, DropdownToggle, FormInput,
    InputGroup, Input, FormGroup, Label, CardHeader, CardBody, Container,
    Table, Pagination, DropdownMenu, PaginationItem, PaginationLink, InputGroupAddon, InputGroupText, Button
} from 'reactstrap';
import Select from 'react-select';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { DBUtil } from '../../services';

//let ShareInput = [];
//let MultiArray = [];
class ReactTable extends Component {
    constructor() {
        super();
        this.state = {
            Forms : [],
            FormID : [],

            formValue: '',
            CurrentForm : []
        }
        this.onSelectForm = this.onSelectForm.bind(this);
        this.onFormSelectValue = this.onFormSelectValue.bind(this);
        this.RenderAnswerField = this.RenderAnswerField.bind(this);
        this.onMultiChoice = this.onMultiChoice.bind(this);
        this.onCheckBox = this.onCheckBox.bind(this);
        
        
        
      
    }

    componentWillMount() {
        let componentRef = this;
        DBUtil.addChangeListener("Que", function (objectList) {
            let form = [];
            let FormID = [];
            objectList.forEach(function (doc) {
              FormID.push({label: doc.id ,value :doc.id });
              form.push({
                  FormID: doc.id,
                  FormData: doc.data()
                });
            });
            componentRef.setState({Forms: form, FormID : FormID})
            console.log('forms', componentRef.state);
            console.log('Form Id', FormID);
            //console.log('forms', this.state);
        });
    }

    onSelectForm(formValue){
      let CurrentForm = [];
      this.state.Forms.forEach(fItem =>{
        if(fItem.FormID == formValue){
            CurrentForm = (fItem.FormData.Questions);
        }
      })
      this.setState({formValue : formValue , CurrentForm : CurrentForm});
      console.log('selected Form Name', CurrentForm);
      //this.onSelectForm();
    }

     onFormSelectValue( ){
      let ShareInput = this.state.CurrentForm.map(Fitem =>{
        return(
          <div>
            <FormGroup>
              <h3>{Fitem.QuestionTitle}</h3>
             {this.RenderAnswerField(Fitem)}
            </FormGroup>
          </div>
         
        )
       });
       return ShareInput;
     }
     RenderAnswerField(item){
      console.log('RenderAnswerField', item);
      if(item.AnswerFeild == "Input Text"){
        return(
          <div>
            <FormGroup row>
            <Col xs="12" md="6" >
              <InputGroup >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-note"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Answer Title" name="Answer" />
              </InputGroup>
            </Col>
          </FormGroup>
            </div>
        )
        
      }else if(item.AnswerFeild == "Mulitple Choice"){
        return(
          <div>
            {/* <h3>{item.AnswerFeild}</h3> */}
            {this.onMultiChoice(item.value)}
            </div>
        )
      }
      else if(item.AnswerFeild == "Check Box"){
        return(
          <div>
          {this.onCheckBox(item.value)}
            </div>
        )
      }
      return(
        <div />
      )
     }

onMultiChoice(value){
  console.log('onMultiChoice', value);
let MultiChoice = value.map(fItem =>{
  return(
    <div>
      <FormGroup row>
              <FormGroup check inline>
                <Input className="form-check-input" type="radio"  name="inline-radios" value={fItem.Value} />
                <Label className="form-check-label" check htmlFor="inline-radio1">{fItem.Value}</Label>
              </FormGroup>
          </FormGroup> 
    </div>
  )
})
return MultiChoice;
}


onCheckBox(value){
  console.log('onMultiChoice', value);
let CheckBox = value.map(fItem =>{
  return(
    <div>
      <FormGroup check inline>
      <Label check>
        <Input type="checkbox" /> {fItem.Value}
                  </Label>

    </FormGroup>
    </div>
  )
})
return CheckBox;
}
    render() {
        const { Form, formValue} = this.state;   
        const options = this.state.FormID;
        console.log('forms', this.state);
        if(formValue == ''){
          return (
            <div>
            <FormGroup>
              <FormGroup>
                <Select
                multi
                  onChange={this.onSelectForm}
                  placeholder="Select Form"
                  simpleValue
                  value={formValue}
                  options={options}
                />
              </FormGroup>
            </FormGroup>                
            </div>
        );
        }
       else{
         return(
           <div className="animated fadeIn">
             <Container>
               <Row className="justify-content-center">
                 <Col md="12">
                   <Card className="mx-12">
                     <CardBody className="p-6">
                       {this.onFormSelectValue()}
                     </CardBody>
                   </Card>
                 </Col>
               </Row>
             </Container>
           </div>
         )
          
       }
    }


}
export default ReactTable;




















// import React, { Component } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import {
//   Container, Input, InputGroup, InputGroupText, InputGroupAddon, Badge, Row, Col, Progress, Dropdown, DropdownToggle,
//   DropdownMenu, DropdownItem, Card, CardHeader, CardBody, CardFooter, CardTitle, Button, ButtonToolbar,
//   ButtonGroup, ButtonDropdown, Label, Table, Form, FormGroup, FormText,
// } from 'reactstrap';
// import { createBrowserHistory } from 'history';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import { DBUtil } from '../../services';
// //import './Questions.less';
// var history = createBrowserHistory();


// class ResponsiveTable extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = 
//     {
//       columns : [
//         {label: 'Payment' ,value : 'Payment'},
//         {label: 'date' ,value : 'Processing Date'},
//         {label: 'amount' ,value : 'Amount'},
//         {label: 'payee' ,value : 'Payee'}
//       ],
//       rows : [
//         {
//         label1: 'payment' ,value1: 'Payment #1',
//        label2:' date', value2: 'March 20, 1989',
//         label3: 'amount' , value3: '$29.99',
//         label4 : 'payee', value4: 'John Smith'
//       },
//       {
//         label1: 'payment' ,value1: 'Payment #1',
//        label2:' date', value2: 'March 20, 1989',
//         label3: 'amount' , value3: '$29.99',
//         label4 : 'payee', value4: 'John Smith'
//       },
//       {
//         label1: 'payment' ,value1: 'Payment #1',
//        label2:' date', value2: 'March 20, 1989',
//         label3: 'amount' , value3: '$29.99',
//         label4 : 'payee', value4: 'John Smith'
//       },
//       {
//         label1: 'payment' ,value1: 'Payment #1',
//        label2:' date', value2: 'March 20, 1989',
//         label3: 'amount' , value3: '$29.99',
//         label4 : 'payee', value4: 'John Smith'
//       }
//     ]
//     }
    
// }

//   _head () {
    
//     var columns1 = this.state.columns.map(colName => {
//       return (
//         <th>{colName.value}</th>  
//       );
//     });
//     return (
//       <tr>{columns1}</tr>
//     );
//   }
  
//   _rows () {
//     //var _this = this;
//     var values =  this.state.rows.map(function(row) {
//         //if(colName.label == row.label){
//           return (
//             <tr>
//             <td data-label={row.label1}>{row.value1}</td>
//             <td data-label={row.label2}>{row.value2}</td>
//             <td data-label={row.label3}>{row.value3}</td>
//             <td data-label={row.label4}>{row.value4}</td>
//             </tr>
//           );
//        // }
  
//   })


//     ////////////////////////////////////////////////////////////
//     //   this.values = this.state.columns.map( colName => {
//     //     return this.state.rows.map(function(row) {
//     //       if(colName.label == row.label){
//     //         return (
//     //           <td data-label={colName.value}>{row.value}</td>
//     //         );
//     //       }
//     //   })
//     // })
//       return (
//         <tr>
//        {values}</tr>
//       );
   
//   }

  
//   render () {
//     return (
//       <Table className="responsive-table">
//         <thead>
//           {this._head()}
//         </thead>
//         <tbody>
//           {this._rows()}
//         </tbody>
//       </Table>
//     );
//   }
// }
    



// class ReactTable extends Component {
//   render(){
//     return(
//       <ResponsiveTable  />
//     )
//   }
// }

// export default ReactTable;


