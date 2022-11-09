import Cocktail from "../Cocktail/Cocktail";
import "./CocktailContainer.css";

const CocktailContainer = ({ filteredCocktails }) => {
  const allCocktails = filteredCocktails.map((cocktail) => {
    return <Cocktail cocktail={cocktail} />;
  });
  return <div className="cocktail-container">{allCocktails}</div>;
};

export default CocktailContainer;
