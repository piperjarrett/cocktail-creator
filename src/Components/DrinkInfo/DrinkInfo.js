import { useEffect, useState } from "react";
import "./DrinkInfo.css";
import PropTypes, { string } from "prop-types";

const DrinkInfo = ({ cocktailName }) => {
  const [oneCocktail, setOneCocktail] = useState({});
  const [error, setError] = useState("");
  const [rating, setRating] = useState();

  useEffect(() => {
    fetch(
      `https://cocktail-api-flax.vercel.app/api/vi/cocktails/${cocktailName}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setOneCocktail(data);
        setRating(data.rating);
      })
      .catch((err) => setError(err.message));
  }, []);


  const patchRequest = async (event) => {
    const newRating = {
      id: oneCocktail.id,
      name: oneCocktail.name,
      ingredients: oneCocktail.ingredients,
      recipe: oneCocktail.recipe,
      directions: oneCocktail.directions,
      image: oneCocktail.image,
      rating: parseInt(event.target.value),
    };

    await fetch(
      `https://cocktail-api-flax.vercel.app/api/vi/cocktails/${cocktailName}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newRating),
      }
    ).catch((err) => setError(err.message));

    await fetch(
      `https://cocktail-api-flax.vercel.app/api/vi/cocktails/${cocktailName}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setOneCocktail(data);
        setRating(data.rating);
      })

      .catch((err) => setError(err));
  };

  return error ? (
    <div>
      <h1 className="error">Uh Oh, something went wrong.</h1>
      <p className="error">Please try again Later!</p>
    </div>
  ) : !oneCocktail.id ? (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <div className="cocktail-info">
      <h1 className="drink-name">{oneCocktail.name}</h1>
      <img className="cocktail-image" src={oneCocktail.image} />
      <div className="recipe-directions">
        <div className="recipe">
          <h4>Recipe:</h4>
          <p>{oneCocktail.recipe}</p>
        </div>
        <div className="directions">
          <h4>Directions:</h4>
          <p>{oneCocktail.directions}</p>
        </div>
      </div>
      <h4>Rate this cocktail!</h4>
      <form className="rating">
        <input
          id="rating1"
          type="radio"
          name="rating"
          value="1"
          checked={rating >= 1 ? true : false}
          onClick={(event) => patchRequest(event)}
          onChange={() => {}}
        />
        <label htmlFor="rating1"></label>
        <input
          id="rating2"
          type="radio"
          name="rating"
          value="2"
          checked={rating >= 2 ? true : false}
          onClick={(event) => patchRequest(event)}
          onChange={() => {}}
        />
        <label htmlFor="rating2"></label>
        <input
          id="rating3"
          type="radio"
          name="rating"
          value="3"
          checked={rating >= 3 ? true : false}
          onClick={(event) => patchRequest(event)}
          onChange={() => {}}
        />
        <label htmlFor="rating3"></label>
        <input
          id="rating4"
          type="radio"
          name="rating"
          value="4"
          checked={rating >= 4 ? true : false}
          onClick={(event) => patchRequest(event)}
          onChange={() => {}}
        />
        <label htmlFor="rating4"></label>
        <input
          id="rating5"
          type="radio"
          name="rating"
          value="5"
          checked={rating >= 5 ? true : false}
          onClick={(event) => patchRequest(event)}
          onChange={() => {}}
        />
        <label htmlFor="rating5"></label>
      </form>
    </div>
  );
};

DrinkInfo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(string),
  recipe: PropTypes.string,
  directions: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  oneCocktail: PropTypes.object,
  cocktailName: string,
};
export default DrinkInfo;
