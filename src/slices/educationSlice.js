import { createSlice } from "@reduxjs/toolkit";
import { getInitialState, getSamples } from "./misc";

const labels = ["universityName", "city", "degree", "subject", "from", "to"];
const samplesArray = [
  ["University of Technology", "Oklahoma", "Master", "Science", "2008", "2010"],
  ["University of Design Art", "New York", "Bachelor", "Visual Art", "2005", "2008"]
];

export const educationSlice = createSlice({
  name: "education",
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

export const { reset, loadExample, update, add, remove } = educationSlice.actions;

export default educationSlice.reducer;
