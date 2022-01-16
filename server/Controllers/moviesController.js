const moviesApi = require("../API/moviesApi");

const getTop250Movies = async (req, res) => {
  const limited = req.query.limit ? req.query.limit : false;
  try {
    const movies = await moviesApi.Top250Movies();
    if (movies.data.items.length === 0) {
      return res.status(500).send("Something went wrong");
    }
    if (limited) {
      return res.status(200).send(movies.data.items.slice(0, limited));
    } else {
      return res.status(200).send(movies.data.items);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getTop250TVs = async (req, res) => {
  const limited = req.query.limit ? req.query.limit : false;
  try {
    const movies = await moviesApi.Top250TVs();
    if (movies.data.items.length === 0) {
      return res.status(500).send("Something went wrong");
    }
    if (limited) {
      return res.status(200).send(movies.data.items.slice(0, limited));
    } else {
      return res.status(200).send(movies.data.items);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getMostPopularMovies = async (req, res) => {
  const limited = req.query.limit ? req.query.limit : false;
  try {
    const movies = await moviesApi.MostPopularMovies();
    if (movies.data.items.length === 0) {
      return res.status(500).send("Something went wrong");
    }
    if (limited) {
      return res.status(200).send(movies.data.items.slice(0, limited));
    } else {
      return res.status(200).send(movies.data.items);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getMostPopularTVs = async (req, res) => {
  const limited = req.query.limit ? req.query.limit : false;
  try {
    const movies = await moviesApi.MostPopularTVs();
    if (movies.data.items.length === 0) {
      return res.status(500).send("Something went wrong");
    } else if (limited) {
      return res.status(200).send(movies.data.items.slice(0, limited));
    } else {
      return res.status(200).send(movies.data.items);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getInTheaters = async (req, res) => {
  const limited = req.query.limit ? req.query.limit : false;
  try {
    const movies = await moviesApi.InTheaters();
    if (movies.data.items.length === 0) {
      return res.status(500).send("Something went wrong");
    }
    if (limited) {
      return res.status(200).send(movies.data.items.slice(0, limited));
    } else {
      return res.status(200).send(movies.data.items);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getComingSoon = async (req, res) => {
  const limited = req.query.limit ? req.query.limit : false;
  try {
    const movies = await moviesApi.ComingSoon();
    if (movies.data.items.length === 0) {
      return res.status(500).send("Something went wrong");
    }
    if (limited) {
      return res.status(200).send(movies.data.items.slice(0, limited));
    } else {
      return res.status(200).send(movies.data.items);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getTrailer = async (req, res) => {
  const id = req.query.id;
  if (!id) return res.status(400).send("Bad request");
  try {
    const movies = await moviesApi.GetTrailer(id);
    return res.status(200).send(movies.data.linkEmbed);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getPoster = async (req, res) => {
  try {
    const poster = await moviesApi.GetPoster(req.query.id);
    return res.status(200).send({
      id: poster.data.imDbId,
      title: poster.data.title,
      year: poster.data.year,
      posters: poster.data.posters[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getFullcast = async (req, res) => {
  try {
    const fullcast = await moviesApi.GetFullCast(req.query.id);
    const cast = fullcast.data.actors.slice(0, 9);
    return res.status(200).send(cast);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getWiki = async (req, res) => {
  try {
    const wiki = await moviesApi.GetWiki(req.query.id);
    return res.status(200).send(wiki.data.plotShort.plainText);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

const getRating = async (req, res) => {
  try {
    const rating = await moviesApi.GetRating(req.query.id);
    return res.status(200).send(rating.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong !!!");
  }
};

module.exports = {
  getTrailer,
  getTop250Movies,
  getComingSoon,
  getInTheaters,
  getMostPopularMovies,
  getMostPopularTVs,
  getTop250TVs,
  getPoster,
  getFullcast,
  getWiki,
  getRating,
};
