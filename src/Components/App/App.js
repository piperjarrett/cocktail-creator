import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import DrinkInfo from "../DrinkInfo/DrinkInfo";
import PropTypes from "prop-types";

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
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1>Cocktail Creator</h1>
          </NavLink>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="home-page">
                <Form cocktails={cocktails} filterDrinks={filterDrinks} />
                <CocktailContainer filteredCocktails={filteredCocktails} />
              </div>
            )}
          />
          <Route
            path="/cocktails/:cocktail"
            render={({ match }) => (
              <DrinkInfo cocktailName={match.params.cocktail} />
            )}
          />
        </Switch>
      </main>
    </Router>
  );
}

App.propTypes = {
  error: PropTypes.string,
  cocktail: PropTypes.array,
};

export default App;
