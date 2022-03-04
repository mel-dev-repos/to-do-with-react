import React, { Component } from "react";
import "./todolist.css";
export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    fetch("/package-todo/json/todo.json")
      .then((response) => {
        return response.json();
      })
      .then((resolve) => {
        this.setState({ list: resolve });
      });
  }
  render() {
    return (
      <ul className="parent">
        <li>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ list: [...this.state.list, e.target.value] });
            }}
          />
        </li>
        {this.state.list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => {}}>done</button>
          </li>
        ))}
      </ul>
    );
  }
}

// export default ToDoList;
