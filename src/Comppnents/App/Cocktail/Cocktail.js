const Cocktail = ({ cocktail }) => {
  return (
    <div className="cocktail">
      <img src={cocktail.image} />
    </div>
  );
};

export default Cocktail;
