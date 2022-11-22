import cn from "classnames";

import classes from "./list.module.scss";

function List({ tasks, onToggleClick, onRemoveClick }) {
  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={cn({ [classes.completed]: completed })}
            onClick={() => onToggleClick(id)}
          >
            {text}
          </span>
          &nbsp;
          <button onClick={() => onRemoveClick(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
