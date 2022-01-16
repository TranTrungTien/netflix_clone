import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moviesApi from "../../../Api/movies";

export const fetchTop250Movies = createAsyncThunk(
  "movies/fetchTop250Movies",
  async () => {
    const movies = await moviesApi.Top250Movies();
    return movies.data;
  }
);
export const fetchTop250TVs = createAsyncThunk(
  "movies/fetchTop250TVs",
  async () => {
    const movies = await moviesApi.Top250TVs();
    return movies.data;
  }
);
export const fetchMostPopularMovies = createAsyncThunk(
  "movies/fetchMostPopularMovies",
  async () => {
    const movies = await moviesApi.MostPopularMovies();
    return movies.data;
  }
);
export const fetchMostPopularTVs = createAsyncThunk(
  "movies/fetchMostPopularTVs",
  async () => {
    const movies = await moviesApi.MostPopularTVs();
    return movies.data;
  }
);
export const fetchComingSoon = createAsyncThunk(
  "movies/fetchComingSoon",
  async () => {
    const movies = await moviesApi.ComingSoon();
    return movies.data;
  }
);

const top250MoviesSlice = createSlice({
  name: "top250Movies",
  initialState: {
    loading: false,
    error: null,
    top250Movies: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTop250Movies.pending]: (state) => {
      state.loading = true;
    },
    [fetchTop250Movies.fulfilled]: (state, action) => {
      state.loading = false;
      state.top250Movies.push(action.payload);
    },
    [fetchTop250Movies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});
const top250TVsSlice = createSlice({
  name: "top250TVs",
  initialState: {
    loading: false,
    error: null,
    top250TVs: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTop250TVs.pending]: (state) => {
      state.loading = true;
    },
    [fetchTop250TVs.fulfilled]: (state, action) => {
      state.loading = false;
      state.top250TVs.push(action.payload);
    },
    [fetchTop250TVs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});
const mostPopularMoviesSlice = createSlice({
  name: "mostPopularMovies",
  initialState: {
    loading: false,
    error: null,
    mostPopularMovies: [],
  },
  reducers: {},
  extraReducers: {
    [fetchMostPopularMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchMostPopularMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.mostPopularMovies.push(action.payload);
    },
    [fetchMostPopularMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});
const mostPopularTVsSlice = createSlice({
  name: "mostPopularTVs",
  initialState: {
    loading: false,
    error: null,
    mostPopularTVs: [],
  },
  reducers: {},
  extraReducers: {
    [fetchMostPopularTVs.pending]: (state) => {
      state.loading = true;
    },
    [fetchMostPopularTVs.fulfilled]: (state, action) => {
      state.loading = false;
      state.mostPopularTVs.push(action.payload);
    },
    [fetchMostPopularTVs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});
const comingSoonSlice = createSlice({
  name: "comingSoon",
  initialState: {
    loading: false,
    error: null,
    comingSoon: [],
  },
  reducers: {},
  extraReducers: {
    [fetchComingSoon.pending]: (state) => {
      state.loading = true;
    },
    [fetchComingSoon.fulfilled]: (state, action) => {
      state.loading = false;
      state.comingSoon.push(action.payload);
    },
    [fetchComingSoon.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const top250Movies = (state) => state.top250Movies;
export const top250TVs = (state) => state.top250TVs;
export const mostPopularMovies = (state) => state.mostPopularMovies;
export const mostPopularTVs = (state) => state.mostPopularTVs;
export const comingSoon = (state) => state.comingSoon;

export const { reducer: top250MoviesReducer } = top250MoviesSlice;
export const { reducer: top250TVsReducer } = top250TVsSlice;
export const { reducer: mostPopularMoviesReducer } = mostPopularMoviesSlice;
export const { reducer: mostPopularTVsReducer } = mostPopularTVsSlice;
export const { reducer: comingSoonReducer } = comingSoonSlice;
