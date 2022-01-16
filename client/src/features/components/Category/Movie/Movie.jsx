import PropTypes from "prop-types";
import React from "react";
import "./Movie.css";

const Movie = ({
  movieId,
  title,
  widthWrap,
  heightWrap,
  widthInner,
  heightInner,
  widthImage,
  heightImage,
  padding,
  margin,
  handleOpenOverview,
  movie,
  handleOpenTrailerMovie,
}) => {
  const handleOpenOverviewMovie = () => {
    if (!handleOpenOverview) return;
    handleOpenOverview(true, movie.id);
  };
  const handleOpenTrailer = () => {
    if (!handleOpenTrailerMovie) return;
    handleOpenTrailerMovie(movieId);
  };
  return (
    <div
      className={`${widthWrap} ${heightWrap} ${padding} ${margin} relative  flex-1 rounded-md custom-style-movie`}
    >
      <div className={`${widthInner} ${heightInner} rounded-md`}>
        <img
          src={
            movie
              ? movie.image
              : "https://img.lovepik.com/element/40021/7866.png_860.png"
          }
          alt="Movies"
          className={`${widthImage} ${heightImage} object-cover object-center rounded-md`}
        />
        <div className="absolute top-0 left-0 p-5 text-left w-full h-full text-white z-20 custom-style-inf">
          <div className="flex flex-row justify-between items-end w-full h-full flex-1 ">
            <div className="flex flex-col items-start pb-2">
              <div
                className="text-red-600 cursor-pointer"
                onClick={handleOpenTrailer}
              >
                <i className="far fa-play-circle fa-2x"></i>
              </div>
              <div className="text-sm text-gray-200">
                <h4>{movie ? movie.title : "Title"}</h4>
              </div>
              <div>
                <p className="text-xs text-gray-300 font-thin">
                  {movie ? movie.crew : "Description"}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 text-xs font-light pb-2">
              <i className="fas fa-volume-up cursor-pointer "></i>
              <i className="far fa-thumbs-up cursor-pointer"></i>
              <i className="far fa-thumbs-down cursor-pointer"></i>
              <i className="fas fa-plus cursor-pointer"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 hover:text-red-700">
            <i
              className="fas fa-chevron-down cursor-pointer"
              onClick={handleOpenOverviewMovie}
            ></i>
          </div>
        </div>
      </div>
      {title && (
        <span className="w-full text-base text-gray-50 text-center font-light inline-block">
          Images films
        </span>
      )}
    </div>
  );
};

Movie.propTypes = {
  movieId: PropTypes.string,
  title: PropTypes.string,
  widthWrap: PropTypes.string,
  heightWrap: PropTypes.string,
  widthInner: PropTypes.string,
  heightInner: PropTypes.string,
  widthImage: PropTypes.string,
  heightImage: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  handleOpenOverview: PropTypes.func,
  handleOpenTrailerMovie: PropTypes.func,
  movie: PropTypes.object,
};
Movie.defaultProps = {
  id: "",
  title: "",
  widthWrap: "",
  heightWrap: "",
  widthInner: "",
  heightInner: "",
  widthImage: "",
  heightImage: "",
  padding: "",
  margin: "",
  handleOpenTrailerMovie: null,
  movie: null,
};
export default Movie;
