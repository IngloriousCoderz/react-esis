import cn from "classnames";
import { useState } from "react";

import classes from "./todo-list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList({ who }) {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const task = { id: maxId + 1, text };
      return [...tasks, task];
    });

    setText("");
  };

  const handleToggleClick = (id) =>
    setTasks((tasks) => {
      return tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    });

  const handleRemoveClick = (id) =>
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });

  return (
    <>
      <h1>{who}'s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What next?"
          autoFocus
          value={text}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id}>
            <span
              className={cn({ [classes.completed]: completed })}
              onClick={() => handleToggleClick(id)}
            >
              {text}
            </span>
            &nbsp;
            <button onClick={() => handleRemoveClick(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
