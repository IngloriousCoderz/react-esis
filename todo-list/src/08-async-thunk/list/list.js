import PropTypes from "prop-types";
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

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onToggleClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

List.defaultProps = {
  tasks: [],
};

export default List;
