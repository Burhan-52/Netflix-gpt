import { useEffect } from "react";
import { Video } from "../interfaces";
import { addVideoTrailer } from "../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../constants/config";
import { RootState } from "../store/rootReducer";

export const useMovieVideo = ({ movieId }: { movieId: number }) => {
  const dispatch = useDispatch();

  const trailer = useSelector((store: RootState) => store.movies.trailer);

  const getMoviesVideo = async () => {
    try {
      const video = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      const json = await video.json();
      const filterData = json.results.filter(
        (video: Video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addVideoTrailer(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !trailer && getMoviesVideo();
  }, []);

  return [getMoviesVideo];
};
