import Cocktail from "../Cocktail/Cocktail";
import "./CocktailContainer.css";
import { Link, NavLink } from "react-router-dom";

const CocktailContainer = ({ filteredCocktails }) => {
  const allCocktails = filteredCocktails.map((cocktail) => {
    return (
      <div key={cocktail.id}>
        <Cocktail cocktail={cocktail} />
      </div>
    );
  });
  return <div className="cocktail-container">{allCocktails}</div>;
};

export default CocktailContainer;
