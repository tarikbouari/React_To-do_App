import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './header';
import InputTodo from './inputTodo';

const data = JSON.parse(localStorage.getItem('todo'));

class TodoContainer extends React.Component {
  state = {
    todos: data || [],
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

  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todo', JSON.stringify(this.state.todos));
    }
  }

  addTodoItem = (title) => {
    const data = JSON.parse(localStorage.getItem('todo')) || [];
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
    data.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(data));
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            changeHandlerProps={this.changeHandler}
            deleteHandleProps={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
