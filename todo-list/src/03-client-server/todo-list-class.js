import { Component } from "react";
import cn from "classnames";

import classes from "./list/list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

class TodoList extends Component {
  state = {
    text: "",
    tasks: DEFAULT_TASKS,
  };

  handleChange = (event) => this.setState({ text: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState(({ text, tasks }) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const task = { id: maxId + 1, text };
      return {
        text: "",
        tasks: [...tasks, task],
      };
    });
  };

  handleToggleClick = (id) =>
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));

  handleRemoveClick = (id) =>
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id),
    }));

  componentDidMount() {
    console.log("mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
    // console.log(nextProps, this.props, nextState, this.state);
    // return nextState.text !== this.state.text;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated", prevProps, this.props, prevState, this.state);
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    const { who } = this.props;
    const { text, tasks } = this.state;

    return (
      <>
        <h1>{who}'s Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="What next?"
            autoFocus
            value={text}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
        <ul>
          {tasks.map(({ id, text, completed }) => (
            <li key={id}>
              <span
                className={cn({ [classes.completed]: completed })}
                onClick={() => this.handleToggleClick(id)}
              >
                {text}
              </span>
              &nbsp;
              <button onClick={() => this.handleRemoveClick(id)}>x</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
