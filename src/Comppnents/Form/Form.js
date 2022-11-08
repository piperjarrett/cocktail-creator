import { useState } from "react";
import ReactDropdown from "react-dropdown";
import DropdownList from "../DropwdownList/DropdownList";
import "./Form.css";

const Form = ({ juices, alcohols, garnishes }) => {
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Ingrediednt 1"
        value={ingredient1.value}
        name="ingredient1"
        list="alcohol"
      />
      <datalist id="alcohol">
        {alcohols.map((alcohol) => (
          <option key={alcohol} value={alcohol}>
            {alcohol}
          </option>
        ))}
      </datalist>
      <input
        type="text"
        placeholder="Ingrediednt 2"
        value={ingredient2.value}
        name="ingredient2"
        list="juice"
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
        placeholder="Ingrediednt 3"
        value={ingredient3.value}
        name="ingredient3"
        list="garnish"
      />
      <datalist id="garnish">
        <option key="none" value="None" />
        {garnishes.map((garnish) => (
          <option key={garnish} value={garnish}>
            {garnish}
          </option>
        ))}
      </datalist>
    </form>
  );
};

export default Form;
