import { createSlice } from "@reduxjs/toolkit";
import { getInitialState, getSamples } from "./misc";

const getInitialStateDescription = () => {
  const label = "description";
  const obj = getInitialState([label]);
  return { ...obj[label] };
};

const getSampleDescription = () => {
  const label = "description";
  const sample =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.";
  const obj = getSamples([label], [sample]);
  return { ...obj[label] };
};

export const descriptionSlice = createSlice({
  name: "description",
  initialState: getInitialStateDescription(),
  reducers: {
    reset: () => getInitialStateDescription(),
    loadExample: () => getSampleDescription(),
    update: (state, action) => {
      const { text } = action.payload;
      return { ...state, text };
    }
  }
});

export const { reset, loadExample, update } = descriptionSlice.actions;

export default descriptionSlice.reducer;
