// export { default } from "./form";

// import { useState } from "react";
import FormComponent from "./form";
import { useForm } from "./use-form";

// Container Component
// (Smart vs. Dumb Component)
function Form({ onSubmit }) {
  const { text, handleChange, handleSubmit } = useForm({ onSubmit });
  // const [text, setText] = useState("");

  // const handleChange = (event) => setText(event.target.value);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSubmit(text);
  //   setText("");
  // };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Form;
