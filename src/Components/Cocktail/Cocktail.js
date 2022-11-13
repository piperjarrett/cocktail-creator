import "./Cocktail.css";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const ingredients = cocktail.ingredients.map((ingredient) => {
    return <p key={ingredient}>{ingredient}</p>;
  });
  return (
    <div className="cocktail">
      <img className="cocktail-image" src={cocktail.image} />
      <div className="cocktail-details">
        <h4 className="cocktail-name">{cocktail.name}</h4>
        {ingredients}
        <Link to={`/cocktails/${cocktail.name}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
