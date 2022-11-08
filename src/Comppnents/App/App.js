import "./App.css";
import { useEffect, useState } from "react";
import Form from "../Form/Form";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState("");
  const [juices, setJuices] = useState([]);
  const [garnish, setGarnish] = useState([]);
  const [alcohols, setAlcohols] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/vi/cocktails")
      .then((resp) => resp.json())
      .then((data) => setCocktails(data.cocktails))
      .catch((err) => setError(err.message));
    // createInputs();
  }, []);

  useEffect(() => {
    console.log(cocktails);
    createInputs();
  }, [cocktails]);

  const createInputs = () => {
    let juices = [];
    let garnish = [];
    let alcohols = [];
    cocktails.forEach((cocktail) => {
      console.log(cocktail.ingredients);
      cocktail.ingredients.forEach((ingredient) => {
        if (ingredient.includes("Juice") && !juices.includes(ingredient)) {
          juices.push(ingredient);
        } else if (
          ingredient.includes("Garnish") &&
          !garnish.includes(ingredient)
        ) {
          garnish.push(ingredient);
        } else if (
          !alcohols.includes(ingredient) &&
          !juices.includes(ingredient) &&
          !garnish.includes(ingredient)
        ) {
          alcohols.push(ingredient);
        }
      });
    });
    setJuices(juices);
    setGarnish(garnish);
    setAlcohols(alcohols);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cocktail Creator</h1>
        <Form juices={juices} alcohols={alcohols} garnishes={garnish} />
      </header>
    </div>
  );
}

export default App;
