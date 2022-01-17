import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import movieReducer from "../features/movie/MovieSlice";
import userSlice from "../features/user/userSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
});
