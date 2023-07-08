import { createSlice } from "@reduxjs/toolkit";
import { getInitialState, getSamples, base64Image, base64ImageSample } from "./misc";

const getInitialStatePhoto = () => {
  const label = "photo";
  const obj = getInitialState([label]);
  return { ...obj[label], text: base64Image };
};

const getSamplePhoto = () => {
  const label = "photo";
  const sample = base64ImageSample;
  const obj = getSamples([label], [sample]);
  return { ...obj[label] };
};

export const photoSlice = createSlice({
  name: "photo",
  initialState: getInitialStatePhoto(),
  reducers: {
    reset: () => getInitialStatePhoto(),
    loadExample: () => getSamplePhoto(),
    update: (state, action) => {
      const { text } = action.payload;
      return { ...state, text };
    }
  }
});

export const { reset, loadExample, update } = photoSlice.actions;

export default photoSlice.reducer;
