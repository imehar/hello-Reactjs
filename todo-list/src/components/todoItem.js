import React, { Component } from "react";

export default class todoItem extends Component {
  render() {
    const { task, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{task}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
