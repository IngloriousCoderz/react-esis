import { useSelector, useDispatch } from "react-redux";
import { selectList } from "./list.slice";
import { fetchTasks, toggleCompleted, removeTask } from "../store/thunks";

import ListComponent from "./list";
import { useEffect } from "react";

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
