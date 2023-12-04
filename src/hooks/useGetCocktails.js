import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCocktails } from "../redux/reducers/cocktailSlice";

const useGetCocktails = () => {
  const cocktails = useSelector((state) => state.cocktail.cocktails);
  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");
  const value = searchParams.get("value");
  
  useEffect(() => {
    if (type && value) {
      dispatch(getCocktails({ type, value }));
    }
    // eslint-disable-next-line
  }, [location.search]);

  return { cocktails, type, value };
};

export default useGetCocktails;
