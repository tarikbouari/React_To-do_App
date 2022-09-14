import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    // const {todos} = this.state
    return (
      <ul>
        {this.props.todos.map((item) => (
        <TodoItem key={item.id} item = {item} 
        changeHandlerProps = {this.props.changeHandlerProps}
        deleteHandleProps = {this.props.deleteHandleProps}
        />
        ))}
      </ul>
    );
  }
}

export default TodosList;
