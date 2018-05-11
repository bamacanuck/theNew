import React, {Component} from "react";
import $ from 'jquery';


const MATCHING_ITEM_LIMIT = 25;

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [],
            showRemoveIcon: false,
            searchValue: ""
        };
    }

    handleSearchChange(e) {
        const value = e.target.value;

        this.setState({
            searchValue: value
        });

        if (value === "") {
            this.setState({
                item: [],
                showRemoveIcon: false
            });
        } else {
            this.setState({
                showRemoveIcon: true
            });
            /*
                        Client.search(value, foods => {
                            this.setState({
                                item: foods.slice(0, MATCHING_ITEM_LIMIT)
                            });
                        });
                        */
        }
    }

    handleSearchCancel() {
        this.setState({
            item: [],
            showRemoveIcon: false,
            searchValue: ""
        });
    }


    componentDidMount() {
        // let user = userApi.GetById('11111')[0];
        // let house = householdApi.GetById(user.houseId)[0];

        // console.log(user);
        // console.log(house);
        // this.setState({
        //     item: house.shoppingList
        // })
    }




    addItem = (click) => 
    {
        
        $.ajax({
            url: '/api/addItem', type: 'GET',
            data: {
                "houseID": "1234", "name": "bread",
                "quantity": "1", "upcCode": "", "note": "", "marked": false, "imageURL": ""
            }
        }).done(function (result) {
            console.log("Did addItem");
            console.log("Result is ");
            console.log(result);

        }).fail(function (error) {
            console.log("There was an error");
            console.log("status:  " + error.status);
            
        });

    };  

    editItem = (click) => {
        console.log("I'm in EditClick");
        $.ajax({url: 'api/editItem', type: 'GET',
            data: {"houseID":"1234","name":"bread",
                "quantity":"4","upcCode":"","note":"","marked":false,"imageURL":""}}).

        done (function(result){
            console.log("Did editItem");
            console.log("Result is ");
            console.log(result);

        }).
        fail(function(data)
        {
            console.log("There was an error");
            console.log("status:  " + data.status);
            console.log("status text:  " + data.statusText);

        });
    };


    deleteItem= (click) => {
        console.log("I'm in DeleteClick");
        $.ajax({url: 'api/deleteItem', type: 'GET',
            data: {"houseID":"1234","name":"bread",
                "quantity":"2","upcCode":"","note":"","marked":false,"imageURL":""}}).

        done (function(result){
            console.log("Did deleteItem");
            console.log("Result is ");
            console.log(result);

        }).
        fail( function(data)
        {
            console.log("There was an error");
            console.log("status:  " + data.status);
            console.log("status text:  " + data.statusText);

        });
    };

    render() {
        const {showRemoveIcon, item} = this.state;
        const removeIconStyle = showRemoveIcon ? {} : {visibility: "hidden"};

        const foodRows = item.map((food, idx) => (
            <tr key={idx} onClick={() => this.props.onFoodClick(food)}>
                <td>No Description</td>
                <td className="right aligned">{food.name}</td>
                <td className="right aligned">{food.brand}</td>

            </tr>
        ));

        return (
            <div id="food-search">
                <table className="ui selectable structured large table">
                    <thead>
                    <tr>
                        <th colSpan="5">
                            <div className="ui fluid search">
                                <div className="ui icon input">
                                    <input
                                        className="prompt"
                                        type="text"
                                        placeholder="Search foods..."
                                        value={this.state.searchValue}
                                        onChange={this.handleSearchChange}
                                    />
                                    <i className="search icon"/>
                                </div>
                                <i
                                    className="remove icon"
                                    onClick={this.handleSearchCancel}
                                    style={removeIconStyle}
                                />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th className="eight wide"></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <button type="button" id="addBtn" onClick={this.addItem}>Add List</button>
                    <button type="button" id="editBtn" onClick={this.editItem}>Edit List</button>
                    <button type="button" id="deleteBtn" onClick={this.deleteItem}>Delete Button</button>
                    {foodRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;