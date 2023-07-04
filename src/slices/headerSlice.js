import { createSlice } from "@reduxjs/toolkit";
import { getInitialState, getSamples } from "./misc";

const labels = ["firstName", "lastName", "title"];
const samples = ["John", "Doe", "Senior Web Developer"];

export const headerSlice = createSlice({
  name: "header",
  initialState: getInitialState(labels),
  reducers: {
    reset: () => getInitialState(labels),
    loadExample: () => getSamples(labels, samples),
    update: (state, action) => {
      const { target, text } = action.payload;
      state[target] = { ...state[target], text };
      return state;
    }
  }
});

export const { reset, loadExample, update } = headerSlice.actions;

export default headerSlice.reducer;
