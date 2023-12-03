import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRandomCocktail } from "../redux/reducers/cocktailSlice";

const useRandomCocktail = () => {
  const randomCocktail = useSelector((state) => state.cocktail.randomCocktail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomCocktail());
  }, []);

  return { randomCocktail }
};

export default useRandomCocktail;
