import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export async function retrieveTasks() {
  const { data } = await api.get();
  return data;
}

export async function retrieveTaskById(id) {
  const { data } = await api.get(`${id}`);
  return data;
}

export async function createTask(body) {
  const { data } = await api.post("", body);
  return data;
}

export async function updateTask(id, body) {
  const { data } = await api.patch(`${id}`, body);
  return data;
}

export async function deleteTask(id) {
  const { data } = await api.delete(`${id}`);
  return data;
}
