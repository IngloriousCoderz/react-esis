import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../services/api";

export const fetchTasks = createAsyncThunk("app/fetchTasks", () =>
  api.retrieveTasks()
);

export const addTask = createAsyncThunk(
  "app/addTask",
  async (text, { dispatch }) => {
    await api.createTask({ text });
    dispatch(fetchTasks());
  }
);

export const toggleCompleted = createAsyncThunk(
  "app/toggleCompleted",
  async (id, { dispatch, getState }) => {
    const { list } = getState();
    const task = list.find((task) => task.id === id);
    await api.updateTask(id, { completed: !task.completed });
    dispatch(fetchTasks());
  }
);

export const removeTask = createAsyncThunk(
  "app/removeTask",
  async (id, { dispatch }) => {
    await api.deleteTask(id);
    dispatch(fetchTasks());
  }
);
