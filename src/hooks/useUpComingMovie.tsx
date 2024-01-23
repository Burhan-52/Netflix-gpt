import { useEffect } from "react";
import { UP_COMING, options } from "../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";
import { RootState } from "../store/rootReducer";

export const useUpComingMovie = () => {

  const dispatch = useDispatch();

  const upComingMovies = useSelector(
    (store: RootState) => store.movies.upComingMovies
  );

  const getUpComingMovie = async () => {
    try {
      const data = await fetch(UP_COMING, options);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovie();
  }, []);

  return [useUpComingMovie];
};
