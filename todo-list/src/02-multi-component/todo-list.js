import { useState } from "react";

import Form from "./form";
import List from "./list";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList({ who }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const handleSubmit = (text) => {
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const task = { id: maxId + 1, text };
      return [...tasks, task];
    });
  };

  return (
    <>
      <h1>{who}'s Todo List</h1>
      <Form onSubmit={handleSubmit} />
      <List tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default TodoList;
