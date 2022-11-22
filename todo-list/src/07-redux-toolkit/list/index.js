import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleCompleted, selectList } from "./list.slice";

import ListComponent from "./list";

function List() {
  // Redux logic
  const tasks = useSelector(selectList);
  const dispatch = useDispatch();

  const handleToggleClick = (id) => dispatch(toggleCompleted(id));
  const handleRemoveClick = (id) => dispatch(removeTask(id));

  return (
    <ListComponent
      tasks={tasks}
      onToggleClick={handleToggleClick}
      onRemoveClick={handleRemoveClick}
    />
  );
}

export default List;
