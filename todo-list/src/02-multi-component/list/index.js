// export { default } from "./list";

import ListComponent from "./list";
import { useList } from "./use-list";

function List({ tasks, setTasks }) {
  const { handleToggleClick, handleRemoveClick } = useList({ setTasks });

  return (
    <ListComponent
      tasks={tasks}
      onToggleClick={handleToggleClick}
      onRemoveClick={handleRemoveClick}
    />
  );
}

export default List;
