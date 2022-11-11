import Cocktail from "../Cocktail/Cocktail";
import "./CocktailContainer.css";
import PropTypes from "prop-types";

const CocktailContainer = ({ filteredCocktails }) => {
  const allCocktails = filteredCocktails.map((cocktail) => {
    return (
      <div key={cocktail.id}>
        <Cocktail cocktail={cocktail} />
      </div>
    );
  });

  return !filteredCocktails.length ? (
    <div className="error">
      <h1>Sorry, no drinks with that ingredient.</h1>
      <p>Search again</p>
    </div>
  ) : (
    <div className="cocktail-container">{allCocktails}</div>
  );
};

CocktailContainer.propTypes = {
  filteredCocktails: PropTypes.array,
  cocktail: PropTypes.object,
};

export default CocktailContainer;
