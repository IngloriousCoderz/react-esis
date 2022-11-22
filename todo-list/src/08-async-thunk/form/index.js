import { useSelector, useDispatch } from "react-redux";

import FormComponent from "./form";
import { addTask } from "../store/thunks";
import { setText, selectText } from "./text.slice";

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
