import { createSlice } from "@reduxjs/toolkit";
import { getInitialState, getSamples } from "./misc";

const labels = ["address", "phoneNumber", "email"];
const samples = ["Example Street 10", "123456789", "john.doe@gmail.com"];

export const sideSlice = createSlice({
  name: "side",
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

export const { reset, loadExample, update } = sideSlice.actions;

export default sideSlice.reducer;
