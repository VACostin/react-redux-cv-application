import { createSlice } from "@reduxjs/toolkit";
import { getInitialState, getSamples } from "./misc";

const labels = ["position", "company", "city", "from", "to"];
const samplesArray = [
  ["Senior Web Developer", "Facebook Inc.", "Menlo Park", "2015", "Present"],
  ["Junior Web Developer", "Tesla Inc.", "Palo Alto", "2012", "2015"],
  ["UI / UX Designer", "Google LLC.", "Mountain View", "2010", "2012"]
];

export const experienceSlice = createSlice({
  name: "experience",
  initialState: [getInitialState(labels)],
  reducers: {
    reset: () => [getInitialState(labels)],
    loadExample: (state) => {
      // eslint-disable-next-line no-param-reassign
      state = [];
      samplesArray.forEach((samples) => state.push(getSamples(labels, samples)));
      return state;
    },
    update: (state, action) => {
      const { position, target, text } = action.payload;
      state.map((item, index) => {
        if (index === position) item[target] = { ...item[target], text };
        return item;
      });
    },
    add: (state) => {
      state.push(getInitialState(labels));
    },
    remove: (state, action) => {
      const { index } = action.payload;
      // eslint-disable-next-line no-unused-vars, no-param-reassign
      state = state.splice(index, 1);
    }
  }
});

export const { reset, loadExample, update, add, remove } = experienceSlice.actions;

export default experienceSlice.reducer;
