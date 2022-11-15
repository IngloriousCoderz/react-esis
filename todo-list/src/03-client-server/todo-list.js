import { useEffect, useState } from "react";

import Form from "./form";
import List from "./list";

import * as api from "./services/api";

const DEFAULT_TASKS = [];

function TodoList({ who }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  // useEffect(() => {}, []) === componentDidMount
  // useEffect(() => {}, [tasks]) === componentDidMount + componentDidUpdate
  // useEffect(() => { document.title = new Date(); }); // after EVERY render

  const fetchTasks = async () => {
    const tasks = await api.retrieveTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    // retrieveTasks().then(setTasks);
    fetchTasks();
  }, []);

  const handleSubmit = async (text) => {
    await api.createTask({ text });
    fetchTasks();
  };

  return (
    <>
      <h1>{who}'s Todo List</h1>
      <Form onSubmit={handleSubmit} />
      <List tasks={tasks} fetchTasks={fetchTasks} />
    </>
  );
}

export default TodoList;
