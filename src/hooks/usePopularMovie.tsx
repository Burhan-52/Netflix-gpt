import { useEffect } from "react";
import { POPULAR_MOVIE, options } from "../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";
import { RootState } from "../store/rootReducer";

export const usePopularMovie = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store: RootState) => store.movies.popularMovies
  );

  const getPopularMovie = async () => {
    try {
      const data = await fetch(POPULAR_MOVIE, options);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !popularMovies && getPopularMovie();
  }, []);

  return [getPopularMovie];
};
