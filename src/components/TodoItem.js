import React from "react";

class TodoItem extends React.Component {
  render() {
    return <li> {this.props.item.title}</li>;
  }
}

export default TodoItem;
