import { SET_TEXT, SET_TASKS } from "./action-types";

export const setText = (text) => ({ type: SET_TEXT, payload: text });
export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks });
