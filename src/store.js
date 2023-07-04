import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "Slices/headerSlice";
import descriptionReducer from "Slices/descriptionSlice";
import experienceReducer from "Slices/experienceSlice";
import educationReducer from "Slices/educationSlice";
import sideReducer from "Slices/sideSlice";
import photoReducer from "Slices/photoSlice";
import coloredButtonsReducer from "Slices/coloredButtonsSlice";

export default configureStore({
  reducer: {
    header: headerReducer,
    description: descriptionReducer,
    experience: experienceReducer,
    education: educationReducer,
    side: sideReducer,
    photo: photoReducer,
    coloredButtons: coloredButtonsReducer
  }
});
