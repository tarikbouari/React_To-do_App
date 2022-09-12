import React, { Component } from "react";
import TodosList from "./TodosList";
import Header from "./header";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

   changeHandler = (id) =>{
    this.setState(
         this.state.todos.map(item => {
            if (item.id === id){
                item.completed = !item.completed;
            }
            return item
        })
     )

  }

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} changeHandlerProps = {this.changeHandler} />
      </div>
    );
  }
}

export default TodoContainer;
