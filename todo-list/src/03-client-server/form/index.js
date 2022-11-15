import FormComponent from "./form";
import { useForm } from "./use-form";

function Form({ onSubmit }) {
  const { text, handleChange, handleSubmit } = useForm({ onSubmit });

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Form;
