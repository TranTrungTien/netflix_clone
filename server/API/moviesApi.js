const axiosConfig = require("../axiosConfig");

const moviesApi = {
  Top250Movies: () => {
    return axiosConfig.get(`Top250Movies/${process.env.MOVIES_API_KEY}`);
  },
  Top250TVs: () => {
    return axiosConfig.get(`Top250TVs/${process.env.MOVIES_API_KEY}`);
  },
  MostPopularMovies: () => {
    return axiosConfig.get(`MostPopularMovies/${process.env.MOVIES_API_KEY}`);
  },
  MostPopularTVs: () => {
    return axiosConfig.get(`MostPopularTVs/${process.env.MOVIES_API_KEY}`);
  },
  InTheaters: () => {
    return axiosConfig.get(`InTheaters/${process.env.MOVIES_API_KEY}`);
  },
  ComingSoon: () => {
    return axiosConfig.get(`ComingSoon/${process.env.MOVIES_API_KEY}`);
  },
  ////////////////////////////
  GetTrailer: (id) => {
    return axiosConfig.get(`Trailer/${process.env.MOVIES_API_KEY}/${id}`);
  },
  GetPoster: (id) => {
    return axiosConfig.get(`Posters/${process.env.MOVIES_API_KEY}/${id}`);
  },
  GetFullCast: (id) => {
    return axiosConfig.get(`FullCast/${process.env.MOVIES_API_KEY}/${id}`);
  },
  GetRating: (id) => {
    return axiosConfig.get(`Rating/${process.env.MOVIES_API_KEY}/${id}`);
  },
  GetWiki: (id) => {
    return axiosConfig.get(`Wikipedia/${process.env.MOVIES_API_KEY}/${id}`);
  },
};

module.exports = moviesApi;
