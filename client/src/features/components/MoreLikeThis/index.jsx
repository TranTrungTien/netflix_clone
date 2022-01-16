import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTop250Movies, top250Movies } from "../Category/moviesSlice";
import Movie from "../Category/Movie/Movie";

const MoreLikeThis = () => {
  const movies = useSelector((state) => top250Movies(state));
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      dispatch(fetchTop250Movies());
    };
    if (movies.top250Movies.length === 0) {
      fetchMovie();
    }
  }, [movies, dispatch]);

  return (
    <div className="w-full grid grid-cols-6 gap-4 place-content-center justify-center items-center">
      {movies &&
        !movies.loading &&
        movies.top250Movies.length &&
        movies.top250Movies[0].map((movie) => {
          return (
            <Movie
              key={movie.id}
              widthWrap="w-full"
              heightWrap="h-full"
              widthInner="w-full"
              heightInner="h-full"
              widthImage="w-full"
              heightImage="h-full"
              movie={movie}
            />
          );
        })}
    </div>
  );
};

export default MoreLikeThis;
