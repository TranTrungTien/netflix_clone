import { configureStore } from "@reduxjs/toolkit";
import {
  top250MoviesReducer,
  top250TVsReducer,
  mostPopularMoviesReducer,
  mostPopularTVsReducer,
  comingSoonReducer,
} from "../features/components/Category/moviesSlice";
import userReducer from "../features/auth/userSlice";

const root = {
  top250Movies: top250MoviesReducer,
  top250TVs: top250TVsReducer,
  mostPopularMovies: mostPopularMoviesReducer,
  mostPopularTVs: mostPopularTVsReducer,
  comingSoon: comingSoonReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: root,
});

export default store;
