import React, { Component } from "react";
import TodoItem from "./todoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              task={item.task}
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
            ></TodoItem>
          );
        })}
        <button className="btn btn-block btn-danger" onClick={clearList}>
          Clear list
        </button>
      </ul>
    );
  }
}
