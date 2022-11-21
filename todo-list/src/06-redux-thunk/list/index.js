import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, removeTask, toggleCompleted } from "../store/thunks";
import { selectList } from "../store/selectors";

import ListComponent from "./list";

function List() {
  // Redux logic
  const tasks = useSelector(selectList);
  const dispatch = useDispatch();

  const handleToggleClick = (id) => dispatch(toggleCompleted(id));
  const handleRemoveClick = (id) => dispatch(removeTask(id));

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <ListComponent
      tasks={tasks}
      onToggleClick={handleToggleClick}
      onRemoveClick={handleRemoveClick}
    />
  );
}

export default List;
