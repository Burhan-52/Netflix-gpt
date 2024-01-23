import React, { useEffect } from "react";
import { NOW_PLAYING_MOVIE, options } from "../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { RootState } from "../store/rootReducer";

export const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovie = async () => {
    try {
      const data = await fetch(NOW_PLAYING_MOVIE, options);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovie();
  }, []);

  return [getNowPlayingMovie];
};
