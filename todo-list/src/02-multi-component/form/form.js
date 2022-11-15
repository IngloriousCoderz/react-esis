// import { useForm } from "./use-form";

// Presentational Component
// funzione pura delle props
function Form({ text, onChange, onSubmit }) {
  // const { text, handleChange, handleSubmit } = useForm({ onSubmit });

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={onChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
