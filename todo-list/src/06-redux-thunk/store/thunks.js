import { setTasks, setText } from "./action-creators";
import * as api from "../services/api";

console.log("Hello world!");
console.error("Ouch!");

export const fetchTasks = () => async (dispatch) => {
  const tasks = await api.retrieveTasks();
  dispatch(setTasks(tasks));
};

export const addTask = (text) => async (dispatch) => {
  await api.createTask({ text });
  dispatch(setText(""));
  dispatch(fetchTasks());
};

export const toggleCompleted = (id) => async (dispatch, getState) => {
  const { list } = getState();
  const task = list.find((task) => task.id === id);
  await api.updateTask(id, { completed: !task.completed });
  dispatch(fetchTasks());
};

export const removeTask = (id) => async (dispatch) => {
  await api.deleteTask(id);
  dispatch(fetchTasks());
};
