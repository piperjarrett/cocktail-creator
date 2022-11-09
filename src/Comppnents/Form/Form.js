import { useState } from "react";
import ReactDropdown from "react-dropdown";
import DropdownList from "../DropwdownList/DropdownList";
import "./Form.css";

const Form = ({ cocktails, filterDrinks }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
    filterDrinks(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Choose Ingredient"
        // value={input}
        name="Ingredient"
        onChange={(event) => handleChange(event)}
      />
      {/* <datalist id="alcohol">
        {alcohols.map((alcohol) => (
          <option key={alcohol} value={alcohol}>
            {alcohol}
          </option>
        ))}
      </datalist>
      <input
        type="text"
        placeholder="Choose Juice"
        value={juice.value}
        name="Juice"
        list="juice"
        onChange={(event) => handleChange(event)}
      />

      <datalist id="juice">
        <option key="none" value="None" />
        {juices.map((juice) => (
          <option key={juice} value={juice}>
            {juice}
          </option>
        ))}
      </datalist>
      <input
        type="text"
        placeholder="Choose Garnish"
        value={garnish.value}
        name="Garnish"
        list="garnish"
        onChange={(event) => handleChange(event)}
      />
      <datalist id="garnish">
        <option key="none" value="None" />
        {garnishes.map((garnish) => (
          <option key={garnish} value={garnish}>
            {garnish}
          </option>
        ))}
      </datalist>
      <button onClick={(event) => submitDrink(event)}>Find me a drink</button> */}
    </form>
  );
};

export default Form;
