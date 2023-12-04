import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRandomCocktail = createAsyncThunk(
  "cocktail/getRandomCocktail",
  async () => {
    try {
      const response = await axios.get("/random.php");
      return response.data;
    } catch (error) {
      console.log("Error al obtener cóctel", error);
    }
  }
);

export const getCocktails = createAsyncThunk(
  "cocktail/getCocktails",
  async ({ type, value }) => {
    try {
      let endpoint = "";
      switch (type) {
        case "name":
          endpoint = `/search.php?s=${value}`;
          break;
        case "ingredient":
          endpoint = `/search.php?i=${value}`;
          break;
        case "category":
          endpoint = `/filter.php?c=${value}`;
          break;
        default:
          break;
      }

      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.log("Error al obtener cócteles", error);
    }
  }
);

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    status: "idle",
    randomCocktail: null,
    cocktails: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomCocktail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRandomCocktail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.randomCocktail = action.payload.drinks[0];
      })
      .addCase(getRandomCocktail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCocktails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCocktails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cocktails = action.payload.drinks;
      })
      .addCase(getCocktails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cocktailSlice.reducer;
