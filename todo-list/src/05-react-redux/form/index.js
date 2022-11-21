import { useSelector, useDispatch } from "react-redux";

import FormComponent from "./form";
import { addTask, setText } from "../store/action-creators";

function Form() {
  // Redux logic
  const text = useSelector((state) => state.text);
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
