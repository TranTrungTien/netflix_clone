const {
  getMostPopularMovies,
  getMostPopularTVs,
  getTop250Movies,
  getTop250TVs,
  getInTheaters,
  getComingSoon,
  getTrailer,
  getPoster,
  getFullcast,
  getWiki,
  getRating,
} = require("../Controllers/moviesController");

const router = require("express").Router();

router.get("/popularmovies", getMostPopularMovies);
router.get("/populartvs", getMostPopularTVs);
router.get("/top250movies", getTop250Movies);
router.get("/top250tvs", getTop250TVs);
router.get("/intheaters", getInTheaters);
router.get("/comingsoon", getComingSoon);
router.get("/trailer", getTrailer);
router.get("/poster", getPoster);
router.get("/fullcast", getFullcast);
router.get("/wiki", getWiki);
router.get("/rating", getRating);

module.exports = router;
