import { useEffect, useState } from "react";

const DrinkInfo = ({ cocktailName }) => {
  const [Onecocktail, setOneCocktail] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3001/api/vi/cocktails/${cocktailName}`)
      .then((resp) => resp.json())
      .then((data) => setOneCocktail(data))
      .catch((err) => setError(err.message));
  }, []);

  return Onecocktail ? (
    <div className="cocktail-info">
      <h1>{Onecocktail.name}</h1>
      <img src={Onecocktail.image} />
      <p>{Onecocktail.recipe}</p>
      <p>{Onecocktail.directions}</p>
    </div>
  ) : (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default DrinkInfo;
