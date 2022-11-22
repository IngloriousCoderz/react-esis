import PropTypes from "prop-types";

/**
 * Form to create a new task
 */
function Form({ text, onChange, onSubmit }) {
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

Form.propTypes = {
  /**
   * The task's subject
   */
  text: PropTypes.string.isRequired,
  /**
   * What to do when the text changes
   */
  onChange: PropTypes.func,
  /**
   * What to do when the form is submitted
   */
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  text: "",
};

export default Form;
