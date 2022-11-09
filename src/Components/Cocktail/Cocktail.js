import "./Cocktail.css";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const ingredients = cocktail.ingredients.map((ingredient) => {
    return <p key={ingredient}>{ingredient}</p>;
  });
  return (
    <div className="cocktail">
      <img src={cocktail.image} />
      <h4>{cocktail.name}</h4>
      {ingredients}
      <Link to={`/cocktails/${cocktail.name}`}>
        <p>Read More</p>
      </Link>
    </div>
  );
};

export default Cocktail;
