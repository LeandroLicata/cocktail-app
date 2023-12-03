import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "./reducers/cocktailSlice";

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});
