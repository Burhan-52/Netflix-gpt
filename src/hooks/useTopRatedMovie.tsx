import { useEffect } from "react";
import { TOP_RATED, options } from "../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";
import { RootState } from "../store/rootReducer";

export const useTopRatedMovie = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector(
    (store: RootState) => store.movies.topRatedMovies
  );

  const getTopRatedMovie = async () => {
    try {
      const data = await fetch(TOP_RATED, options);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovie();
  }, []);

  return [getTopRatedMovie];
};
