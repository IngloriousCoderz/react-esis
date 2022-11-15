export function useList({ setTasks }) {
  const handleToggleClick = (id) =>
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const handleRemoveClick = (id) =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  return { handleToggleClick, handleRemoveClick };
}
