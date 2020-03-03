import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from "./TodoListItem.js"
import './index.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: "",
      text: ""
    };
  }

  onTitleInput = (props) => {
    this.setState({
      title: props.target.value
    });
  }
  onTextInput = (props) => {
    this.setState({
      text: props.target.value
    });
  }

  addTodo = () => {
    const {todos, title, text } = this.state;
    this.setState({
      todos: todos.concat([{
        title: title,
        text: text
      }])
    });
  }

  removeTodo = (index) => {
    const { todos } = this.state;
    todos.splice(index, 1)
    this.setState({
      todos: todos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo">
        <div className="todo-register">
          <label>Title</label>
          <input
            id="title"
            placeholder="おなかすいた"
            className="todo-register-title"
            type="text"
            value={this.state.title}
            onInput={this.onTitleInput}
          />
          <label>Memo</label>
          <textarea
            className="todo-register-text"
            placeholder="メモ"
            value={this.state.text}
            onInput={this.onTextInput}
          />
          <button
            className="todo-register-submit"
            onClick={this.addTodo}>Add
          </button>
        </div>
      
        <ul>
          {todos.map((todo, index) => 
            <li
              className="todo-list"
              key={index}>
              <TodoListItem
                title={todo.title}
                discription={todo.text}
                index={index}
              />
              <button
                className="todo-remove"
                onClick={() => this.removeTodo(index)}>
                  ×
              </button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);