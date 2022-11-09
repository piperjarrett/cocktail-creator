import Cocktail from "../Cocktail/Cocktail";
import Form from "../../Form/Form";
import { useEffect, useState } from "react";
const CocktailContainer = ({ filteredCocktails }) => {
  const allCocktails = filteredCocktails.map((cocktail) => {
    return <Cocktail cocktail={cocktail} />;
  });
  return <div className="cocktail-container">{allCocktails}</div>;
};

export default CocktailContainer;
