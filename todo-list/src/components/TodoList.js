import React, { Component } from "react";
import TodoItem from "./todoItem";
export default class TodoList extends Component {
  render() {
    return (
      <section>
        <TodoItem></TodoItem>
      </section>
    );
  }
}
