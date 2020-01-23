// import logo from "./logo.svg";
// import "./App.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    id: uuid(),
    items: [
      {
        id: 1,
        task: "wake up"
      },
      {
        id: 2,
        task: "study"
      }
    ],
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle change");
  };
  handleSubmit = e => {
    console.log("handle submit");
  };
  handleEdit = id => {
    console.log(`handle edit $(id)`);
  };
  handleDelete = id => {
    console.log(`handle delete $(id)`);
  };
  clearList = () => {
    console.log("clear list");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              edititem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
