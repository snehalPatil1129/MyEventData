import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, Dropdown, Form, DropdownToggle, FormInput,
    InputGroup, Input, FormGroup, Label, CardHeader, CardBody, Container,
    Table, Pagination, DropdownMenu, PaginationItem, PaginationLink, InputGroupAddon, InputGroupText, Button
} from 'reactstrap';


let ShareInput = [];

class InputField extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentWillMount() {
        let componentRef = this;
        DBUtil.addChangeListener("Que", function (objectList) {
            let Users = [];
            let UsersID = [];
            objectList.forEach(function (doc) {
                UsersID.push(doc.id);
                Users.push({
                    UserID: doc.id,
                    UserData: doc.data()
                });
            });
            componentRef.setState({items: Users})
        });
    }


    render() {

        this.state = this.state;
        return (
            <div>
                <FormGroup>
                   
                </FormGroup>                
            </div>

        );
    }


}
export default InputField;

