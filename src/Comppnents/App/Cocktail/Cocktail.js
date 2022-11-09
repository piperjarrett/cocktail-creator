import "./Cocktail.css";

const Cocktail = ({ cocktail }) => {
  const ingredients = cocktail.ingredients.map((ingredient) => {
    return <p key={ingredient}>{ingredient}</p>;
  });
  return (
    <div className="cocktail">
      <img src={cocktail.image} />
      <h4>{cocktail.name}</h4>
      {ingredients}
    </div>
  );
};

export default Cocktail;
