import React from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
 
  state = {
    editing: false,
  }
  handleEdit = () => {
    this.setState({
      editing: true,
    })
  }
  render() {

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if(this.state.editing){
      viewMode.display="none";
    }else {
      editMode.display ="none"
    }
    const {id,completed, title} = this.props.item
    return (
      
          <li className={styles.item}>
            {/* <div onDoubleClick={this.handleEdit} style={viewMode} >

            </div> */}
            <input type="text" style={editMode} />
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => this.props.changeHandlerProps(id)}
        />
        <span style={completed ? completedStyle : null}>
        {title}
        </span>
        <button onClick={() =>this.props.deleteHandleProps(id)}> Delete</button>
      </li>
      
    );
  }
}

export default TodoItem;
