import PropTypes from "prop-types";
import React from "react";
import Movie from "../Movie/Movie";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";

const Movies = ({ moviesList, handleOpenOverview, handleOpenTrailerMovie }) => {
  return (
    <div className={`flex flex-nowrap w-auto py-7 custom-style-slider`}>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        modules={[Navigation]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {moviesList &&
          moviesList.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Movie
                  key={movie.id}
                  movieId={movie.id}
                  widthWrap="w-max"
                  heightWrap="h-auto"
                  widthInner="min-w-300"
                  heightInner="h-168"
                  widthImage="w-full"
                  heightImage="h-full"
                  padding="px-px"
                  margin="mb-0"
                  handleOpenOverview={handleOpenOverview}
                  movie={movie}
                  handleOpenTrailerMovie={handleOpenTrailerMovie}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

Movies.propTypes = {
  margin: PropTypes.string,
  moviesList: PropTypes.array,
  handleOpenOverview: PropTypes.func,
  handleOpenTrailerMovie: PropTypes.func,
};

export default Movies;
