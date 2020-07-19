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
    items: [],
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      task: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false
      },
      () => console.log("Number of items " + this.state.items.length)
    );
  };
  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id != id);
    const selecedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterItems,
      item: selecedItem.task,
      editItem: true,
      id: selecedItem.id
    });
    console.log(`handle edit ${id}`);
  };
  handleDelete = id => {
    const filterItems = this.state.items.filter(item => item.id != id);
    this.setState({
      items: filterItems
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
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
              editItem={this.state.editItem}
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