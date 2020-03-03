import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
  render() {
    const { title, discription } = this.props;
    return (
      <div className="list">
        <p className="list-title">{title}</p>
        <div className="list-text">{discription}</div>
      </div>
    );
  }
}

export default TodoListItem;