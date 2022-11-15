import * as api from "../services/api";

export function useList({ tasks, fetchTasks }) {
  const handleToggleClick = async (id) => {
    const task = tasks.find((task) => task.id === id);
    await api.updateTask(id, { completed: !task.completed });
    fetchTasks();
  };

  const handleRemoveClick = async (id) => {
    await api.deleteTask(id);
    fetchTasks();
  };

  return { handleToggleClick, handleRemoveClick };
}
