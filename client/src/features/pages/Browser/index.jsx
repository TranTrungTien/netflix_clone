import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../auth/userSlice";
import {
  fetchComingSoon,
  fetchMostPopularMovies,
  fetchMostPopularTVs,
  fetchTop250Movies,
  fetchTop250TVs,
} from "../../components/Category/moviesSlice";
import GuestBrowser from "./GuestBrowser";
import UserBrowser from "./UserBrowser";

const Browser = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTop250Movies());
    dispatch(fetchTop250TVs());
    dispatch(fetchMostPopularMovies());
    dispatch(fetchMostPopularTVs());
    dispatch(fetchComingSoon());
  }, [dispatch]);
  const user = useSelector((state) => getMe(state));

  return <div>{!user ? <UserBrowser /> : <GuestBrowser />}</div>;
};

export default Browser;
