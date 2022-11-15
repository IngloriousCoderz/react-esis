import ListComponent from "./list";
import { useList } from "./use-list";

function List({ tasks, fetchTasks }) {
  const { handleToggleClick, handleRemoveClick } = useList({
    tasks,
    fetchTasks,
  });

  return (
    <ListComponent
      tasks={tasks}
      onToggleClick={handleToggleClick}
      onRemoveClick={handleRemoveClick}
    />
  );
}

export default List;
