import { createSlice } from "@reduxjs/toolkit";

export const coloredButtons = createSlice({
  name: "coloredButtons",
  initialState: {
    loadExample: false,
    reset: false
  },
  reducers: {
    toggle: (state, action) => {
      const { target } = action.payload;
      state[target] = !state[target];
      return state;
    }
  }
});

export const { toggle } = coloredButtons.actions;

export default coloredButtons.reducer;
