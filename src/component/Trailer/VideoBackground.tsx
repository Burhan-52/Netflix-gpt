import { useMovieVideo } from "../../hooks/useMovieVideo";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

export const VideoBackground = ({ movieId }: { movieId: number }) => {
  useMovieVideo({ movieId });

  const trailer = useSelector((store: RootState) => store.movies.trailer);

  const typedTrailer = trailer as { key: string } | null;

  return (
    <div>
      <iframe
        className="w-full  md:h-screen aspect-video pt-14 md:pt-0"
        src={`https://www.youtube.com/embed/${typedTrailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
