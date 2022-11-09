import "./Cocktail.css";

const Cocktail = ({ cocktail }) => {
  console.log(cocktail.ingredients);
  const ingredients = cocktail.ingredients.map((ingridient) => {
    return <p>{ingridient}</p>;
  });
  return (
    <div className="cocktail">
      <img src={cocktail.image} />
      <h4>{cocktail.name}</h4>
      <p>{ingredients}</p>
    </div>
  );
};

export default Cocktail;
