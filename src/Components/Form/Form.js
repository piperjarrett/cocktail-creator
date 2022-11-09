import "./Form.css";

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

export default Form;
