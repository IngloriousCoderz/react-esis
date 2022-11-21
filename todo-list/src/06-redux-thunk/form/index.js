import { useSelector, useDispatch } from "react-redux";

import FormComponent from "./form";
import { setText } from "../store/action-creators";
import { addTask } from "../store/thunks";
import { selectText } from "../store/selectors";

function Form() {
  // Redux logic
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(setText(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(text));
  };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Form;
