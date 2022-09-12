import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    // const {todos} = this.state
    return (
      <ul>
        {this.props.todos.map((item) => (
        //   <li key={item.id}>{item.title}</li>
        <TodoItem key={item.id} item = {item} />
        ))}
      </ul>
    );
  }
}

export default TodosList;
