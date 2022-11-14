import cn from "classnames";
import { useRef, useState } from "react";

import classes from "./todo-list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList({ who }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = inputRef.current;

    // batched updates
    // setTasks([...tasks, { id: 4, text: "Something" }]);
    // setTasks([...tasks, { id: 5, text: "Hello world!" }]);

    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const task = { id: maxId + 1, text: input.value };
      input.value = "";
      // procedural
      // const clone = [...tasks];
      // clone.push(task);
      // return clone;

      // declarative
      return [...tasks, task];
    });
  };

  const handleToggleClick = (id) => {
    setTasks((tasks) => {
      // procedural
      // const clone = [...tasks];
      // const index = clone.findIndex((task) => task.id === id);
      // const taskClone = { ...clone[index] };
      // taskClone.completed = !taskClone.completed;
      // clone[index] = taskClone;
      // return clone;

      // sandwich
      // const index = tasks.findIndex((task) => task.id === id);
      // return [
      //   ...tasks.slice(0, index),
      //   { ...tasks[index], completed: !tasks[index].completed },
      //   ...tasks.slice(index + 1),
      // ];

      // map
      return tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    });
  };

  const handleRemoveClick = (id) => {
    setTasks((tasks) => {
      // procedural
      // const clone = [...tasks];
      // const index = clone.findIndex((task) => task.id === id);
      // clone.splice(index, 1);
      // return clone;

      // sandwich
      // const index = tasks.findIndex((task) => task.id === id);
      // return [...tasks.slice(0, index), ...tasks.slice(index + 1)];

      // filter
      return tasks.filter((task) => task.id !== id);
    });
  };

  return (
    <>
      <h1>{who}'s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="What next?" autoFocus ref={inputRef} />
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
