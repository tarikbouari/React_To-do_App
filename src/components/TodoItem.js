import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.changeHandlerProps(this.props.item.id)}
        />
        {this.props.item.title}
        <button onClick={() =>this.props.deleteHandleProps(this.props.item.id)}> Delete</button>
      </li>
    );
  }
}

export default TodoItem;
