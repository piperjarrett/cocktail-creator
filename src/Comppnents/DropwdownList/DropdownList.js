const DropdownList = ({ data }) => {
  const options = data.map((ingredient) => {
    return <option value={ingredient}>{ingredient}</option>;
  });
  return <div>{options}</div>;
};

export default DropdownList;
