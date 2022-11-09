import { useEffect, useState } from "react";
import "./DrinkInfo.css";
import PropTypes, { string } from "prop-types";

const DrinkInfo = ({ cocktailName }) => {
  const [Onecocktail, setOneCocktail] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3001/api/vi/cocktails/${cocktailName}`)
      .then((resp) => resp.json())
      .then((data) => setOneCocktail(data))
      .catch((err) => setError(err.message));
  }, []);

  const patchRequest = (event) => {
    console.log(Onecocktail);
    console.log(event.target.value);
    // fetch(`http://localhost:3001/api/vi/${Onecocktail.name}`, {
    //   method: "PATCH",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({
    //     id: Onecocktail.id,
    //     name: Onecocktail.name,
    //     ingredients: Onecocktail.ingredients,
    //     recipe: Onecocktail.recipe,
    //     directions: Onecocktail.directions,
    //     image: Onecocktail.image,
    //     rating: event.target.value,
    //   }),
    // });
  };

  return (
    <div className="cocktail-info">
      <h1>{Onecocktail.name}</h1>
      <img src={Onecocktail.image} />
      <p>{Onecocktail.recipe}</p>
      <p>{Onecocktail.directions}</p>
      <div className="rating">
        <input
          id="rating1"
          type="radio"
          name="rating"
          value="1"
          onClick={(event) => patchRequest(event)}
        />
        <label htmlFor="rating1"></label>
        <input
          id="rating2"
          type="radio"
          name="rating"
          value="2"
          onClick={(event) => patchRequest(event)}
        />
        <label htmlFor="rating2"></label>
        <input
          id="rating3"
          type="radio"
          name="rating"
          value="3"
          onClick={(event) => patchRequest(event)}
        />
        <label htmlFor="rating3"></label>
        <input
          id="rating4"
          type="radio"
          name="rating"
          value="4"
          onClick={(event) => patchRequest(event)}
        />
        <label htmlFor="rating4"></label>
        <input
          id="rating5"
          type="radio"
          name="rating"
          value="5"
          onClick={(event) => patchRequest(event)}
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
  Onecocktail: PropTypes.object,
  cocktailName: string,
};
export default DrinkInfo;
