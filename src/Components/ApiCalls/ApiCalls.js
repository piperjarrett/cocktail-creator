export const getAllCocktails = async () => {
  const response = fetch(
    "https://cocktail-api-flax.vercel.app/api/vi/cocktails"
  );
  const data = await response.json();
  return data.cocktails;
  //    .then((resp) => resp.json())
  //     .then((data) => setCocktails(data.cocktails))
  //     .catch((err) => setError(err));
};
