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
  return <div className="cocktail-container">{allCocktails}</div>;
};

CocktailContainer.propTypes = {
  filteredCocktails: PropTypes.array,
  cocktail: PropTypes.object,
};

export default CocktailContainer;
