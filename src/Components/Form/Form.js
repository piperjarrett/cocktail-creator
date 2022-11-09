import "./Form.css";
import PropTypes, { string } from "prop-types";

const Form = ({ filterDrinks }) => {
  const handleChange = (event) => {
    filterDrinks(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Choose Ingredient"
        name="Ingredient"
        onChange={(event) => handleChange(event)}
      />
    </form>
  );
};

Form.propTypes = {
  filterDrinks: PropTypes.func,
};

export default Form;
