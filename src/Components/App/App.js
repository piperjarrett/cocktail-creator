import "./App.css";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrinkInfo from "../DrinkInfo/DrinkInfo";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState("");
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/vi/cocktails")
      .then((resp) => resp.json())
      .then((data) => setCocktails(data.cocktails))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    setFilteredCocktails(cocktails);
  }, [cocktails]);

  const filterDrinks = (input) => {
    let filteredDrinks = [];
    cocktails.forEach((cocktail) => {
      cocktail.ingredients.forEach((ingredient) => {
        if (input.toLowerCase() === "") {
          filteredDrinks = cocktails;
        } else if (
          ingredient.toLowerCase().includes(input.toLowerCase()) &&
          !filteredDrinks.includes(cocktail)
        ) {
          filteredDrinks.push(cocktail);
        }
      });
    });
    setFilteredCocktails(filteredDrinks);
  };

  return error ? (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <Router>
      <main className="App">
        <header className="App-header">
          <h1>Cocktail Creator</h1>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              // return (
              <div className="home-page">
                <Form cocktails={cocktails} filterDrinks={filterDrinks} />
                <CocktailContainer filteredCocktails={filteredCocktails} />
              </div>
              // );
            )}
          />
          <Route
            path="/cocktails/:cocktail"
            render={
              ({ match }) => (
                // return (
                <DrinkInfo
                  cocktails={cocktails}
                  cocktailName={match.params.cocktail}
                />
              )
              // );
            }
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
