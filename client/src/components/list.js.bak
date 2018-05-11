import $ from 'jquery';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import React, {Component} from "react";


class List extends React.Component {

    productName = $( "#formHorizontalEmail" ).val();
    quantity = $( "#quantityInput" ).val();

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }



    addItem = () => {
        console.log("I'm in AddClick");
        $.ajax({
            url: 'http://localhost:8080/api/addItem', type: 'GET',
            data: {
                "houseID": "1234", "name": this.productName,
                "quantity": this.quantity, "upcCode": "", "note": "", "marked": false, "imageURL": ""
            }
        }).done(function (result) {
            console.log("Did addItem");

        }).fail(function (data) {
            console.log("There was an error");
            console.log("status:  " + data.status);
            console.log("status text:  " + data.statusText);
        });

    };
    editItem = () => {
        console.log("I'm in EditClick");
        $.ajax({
            url: 'api/editItem', type: 'GET',
            data: {
                "houseID": "1234", "name": this.productName,
                "quantity": this.quantity, "upcCode": "", "note": "", "marked": false, "imageURL": ""
            }
        }).done(function () {
            console.log("Did editItem");

        }).fail(function (data) {
            console.log("There was an error");
            console.log("status:  " + data.status);
            console.log("status text:  " + data.statusText);

        });
    };
    deleteItem = () => {
        console.log("I'm in DeleteClick");
        $.ajax({
            url: 'api/deleteItem', type: 'GET',
            data: {
                "houseID": "1234", "name": this.productName,
                "quantity": this.quantity, "upcCode": "", "note": "", "marked": false, "imageURL": ""
            }
        }).done(function (result) {
            console.log("Did deleteItem");

        }).fail(function (data) {
            console.log("There was an error");
            console.log("status:  " + data.status);
            console.log("status text:  " + data.statusText);

        });
    };

    getValidationState() {
        const length = this.state.value.length;
        if (length > 4) return 'success';
        else if (length > 2) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div>
                <Form horizontal>
                    <FormGroup
                        validationState={this.getValidationState()}
                        controlId="productInput">
                        <Col sm={6}>
                            <FormControl
                                type="text"
                                placeholder="Product"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="quantityInput">
                        <Col sm={6}>
                            <FormControl type="text" placeholder="Quantity"/>
                        </Col>
                    </FormGroup>

                </Form>
                <Form inline>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={this.addItem()}>Add Item</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={this.editItem()}>Update Item</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={this.deleteItem()}>Delete Item</Button>
                        </Col>
                    </FormGroup>
                </Form>

            </div>
        );
    }
}

export default List;