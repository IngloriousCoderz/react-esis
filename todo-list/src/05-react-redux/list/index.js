import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleCompleted } from "../store/action-creators";

import ListComponent from "./list";

function List() {
  // Redux logic
  const tasks = useSelector((state) => state.list);
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
