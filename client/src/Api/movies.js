import axiosConfig from "../axiosConfig.js";

const moviesApi = {
  Top250Movies: () => {
    return axiosConfig.get("movies/api/top250movies?limit=30");
  },
  Top250TVs: () => {
    return axiosConfig.get("movies/api/top250tvs?limit=30");
  },
  MostPopularMovies: () => {
    return axiosConfig.get("movies/api/popularmovies?limit=30");
  },
  MostPopularTVs: () => {
    return axiosConfig.get("movies/api/populartvs?limit=30");
  },
  ComingSoon: () => {
    return axiosConfig.get("movies/api/comingsoon?limit=30");
  },
};

export default moviesApi;
