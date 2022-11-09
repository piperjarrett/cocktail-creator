import "./App.css";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import CocktailContainer from "./CocktailContainer/CocktailContainer";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState("");
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/vi/cocktails")
      .then((resp) => resp.json())
      .then((data) => setCocktails(data.cocktails))
      // .then((data) => setFilteredCocktails(data.cocktails))
      .catch((err) => setError(err.message));
    // createInputs();
  }, []);

  useEffect(() => {
    setFilteredCocktails(cocktails);
  }, [cocktails]);

  const filterDrinks = (input) => {
    console.log(input);
    let woohoo = [];
    const filter = cocktails.forEach((cocktail) => {
      cocktail.ingredients.forEach((ingredient) => {
        if (input === "") {
          woohoo = cocktails;
        } else if (ingredient.includes(input) && !woohoo.includes(cocktail)) {
          woohoo.push(cocktail);
        }
      });
    });
    console.log(woohoo);
    setFilteredCocktails(woohoo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cocktail Creator</h1>
        <Form cocktails={cocktails} filterDrinks={filterDrinks} />
        <CocktailContainer filteredCocktails={filteredCocktails} />
      </header>
    </div>
  );
}

export default App;
