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

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    status: "idle",
    randomCocktail: null,
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
        state.randomCocktail = action.payload;
      })
      .addCase(getRandomCocktail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message
      });
  },
});

export default cocktailSlice.reducer;
