import React, { Component } from "react";
import TodosList from "./TodosList";
import Header from "./header";
import InputTodo from "./inputTodo";

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

  changeHandler = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    }));
  };

  deleteItem = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((item) => {
          if (item.id !== id) return item;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          changeHandlerProps={this.changeHandler}
          deleteHandleProps={this.deleteItem}
        />
      </div>
    );
  }
}

export default TodoContainer;
