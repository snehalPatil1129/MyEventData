import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Container, Input, InputGroup, InputGroupText, InputGroupAddon, Badge, Row, Col, Progress, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem, Card, CardHeader, CardBody, CardFooter, CardTitle, Button, ButtonToolbar,
  ButtonGroup, ButtonDropdown, Label, Table, Form, FormGroup, FormText,
} from 'reactstrap';
import { createBrowserHistory } from 'history';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { DBUtil } from '../../services';
//import './Questions.less';
var history = createBrowserHistory();


class ResponsiveTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = 
    {
      columns : [
        {label: 'Payment' ,value : 'Payment'},
        {label: 'date' ,value : 'Processing Date'},
        {label: 'amount' ,value : 'Amount'},
        {label: 'payee' ,value : 'Payee'}
      ],
      rows : [
        {
        label1: 'payment' ,value1: 'Payment #1',
       label2:' date', value2: 'March 20, 1989',
        label3: 'amount' , value3: '$29.99',
        label4 : 'payee', value4: 'John Smith'
      },
      {
        label1: 'payment' ,value1: 'Payment #1',
       label2:' date', value2: 'March 20, 1989',
        label3: 'amount' , value3: '$29.99',
        label4 : 'payee', value4: 'John Smith'
      },
      {
        label1: 'payment' ,value1: 'Payment #1',
       label2:' date', value2: 'March 20, 1989',
        label3: 'amount' , value3: '$29.99',
        label4 : 'payee', value4: 'John Smith'
      },
      {
        label1: 'payment' ,value1: 'Payment #1',
       label2:' date', value2: 'March 20, 1989',
        label3: 'amount' , value3: '$29.99',
        label4 : 'payee', value4: 'John Smith'
      }
    ]
    }
    
}

  _head () {
    
    var columns1 = this.state.columns.map(colName => {
      return (
        <th>{colName.value}</th>  
      );
    });
    return (
      <tr>{columns1}</tr>
    );
  }
  
  _rows () {
    //var _this = this;
    var values =  this.state.rows.map(function(row) {
        //if(colName.label == row.label){
          return (
            <tr>
            <td data-label={row.label1}>{row.value1}</td>
            <td data-label={row.label2}>{row.value2}</td>
            <td data-label={row.label3}>{row.value3}</td>
            <td data-label={row.label4}>{row.value4}</td>
            </tr>
          );
       // }
  
  })


    ////////////////////////////////////////////////////////////
    //   this.values = this.state.columns.map( colName => {
    //     return this.state.rows.map(function(row) {
    //       if(colName.label == row.label){
    //         return (
    //           <td data-label={colName.value}>{row.value}</td>
    //         );
    //       }
    //   })
    // })
      return (
        <tr>
       {values}</tr>
      );
   
  }

  
  render () {
    return (
      <Table className="responsive-table">
        <thead>
          {this._head()}
        </thead>
        <tbody>
          {this._rows()}
        </tbody>
      </Table>
    );
  }
}
    



class ReactTable extends Component {
  render(){
    return(
      <ResponsiveTable  />
    )
  }
}

export default ReactTable;


