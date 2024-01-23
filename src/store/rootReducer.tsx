import { combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice";

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  gpt: gptReducer,
  language: languageReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
