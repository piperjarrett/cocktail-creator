import { useEffect, useState } from "react";
import "./DrinkInfo.css";
import PropTypes, { string } from "prop-types";
import { ReactDOM } from "react";

const DrinkInfo = ({ cocktailName }) => {
  const [oneCocktail, setOneCocktail] = useState({});
  const [error, setError] = useState("");
  const [rating, setRating] = useState(oneCocktail.rating);
  console.log(rating);
  useEffect(() => {
    fetch(`http://localhost:3001/api/vi/cocktails/${cocktailName}`)
      .then((resp) => resp.json())
      .then((data) => setOneCocktail(data))
      .then((data) => setRating(oneCocktail.rating))
      .catch((err) => setError(err.message));
  }, []);

  const patchRequest = (event) => {
    setRating(event.target.value);
    fetch(`http://localhost:3001/api/vi/${oneCocktail.name}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: oneCocktail.id,
        name: oneCocktail.name,
        ingredients: oneCocktail.ingredients,
        recipe: oneCocktail.recipe,
        directions: oneCocktail.directions,
        image: oneCocktail.image,
        rating: event.target.value,
      }),
    });
  };

  return (
    <div className="cocktail-info">
      <h1>{oneCocktail.name}</h1>
      <img src={oneCocktail.image} />
      <p>{oneCocktail.recipe}</p>
      <p>{oneCocktail.directions}</p>
      <div className="rating">
        <input
          id="rating1"
          type="radio"
          name="rating"
          value="1"
          checked={rating >= 1 ? true : false}
          onChange={(event) => patchRequest(event)}
        />
        <label htmlFor="rating1"></label>
        <input
          id="rating2"
          type="radio"
          name="rating"
          value="2"
          onChange={(event) => patchRequest(event)}
          checked={rating >= 2 ? true : false}
        />
        <label htmlFor="rating2"></label>
        <input
          id="rating3"
          type="radio"
          name="rating"
          value="3"
          checked={rating >= 3 ? true : false}
          onChange={(event) => patchRequest(event)}
        />
        <label htmlFor="rating3"></label>
        <input
          id="rating4"
          type="radio"
          name="rating"
          value="4"
          checked={rating >= 4 ? true : false}
          onChange={(event) => patchRequest(event)}
        />
        <label htmlFor="rating4"></label>
        <input
          id="rating5"
          type="radio"
          name="rating"
          value="5"
          checked={rating === 5 ? false : false}
          onChange={(event) => patchRequest(event)}
        />
        <label htmlFor="rating5"></label>
      </div>
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
