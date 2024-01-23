import { useSelector } from "react-redux";
import { VideoBackground } from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { RootState } from "../../store/rootReducer";

export const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );

  if (!movies) return null;

  const typedMovies = movies as {
    id: number;
    title: string;
    overview: string;
  }[];

  return (
    <div>
      <VideoTitle
        title={typedMovies[0].title}
        overview={typedMovies[0].overview}
      />
      <VideoBackground movieId={typedMovies[0].id} />
    </div>
  );
};
