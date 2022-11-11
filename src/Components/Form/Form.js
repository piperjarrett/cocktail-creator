import "./Form.css";
import PropTypes, { string } from "prop-types";

const Form = ({ filterDrinks }) => {
  const handleChange = (event) => {
    event.preventDefault();
    filterDrinks(event.target.value);
  };

  const onKeyDownHandler = (event) => {
    console.log(event.which);
    if (event.keyCode === 13 || event.which === 13) {
      event.preventDefault();
      return false;
    }
  };
  return (
    <form onKeyDown={onKeyDownHandler}>
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
