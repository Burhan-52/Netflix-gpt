import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

const SecondaryContainer = () => {
  const Movies = useSelector((store: RootState) => store.movies);

  if (!Movies) return null;

  return (
    <div className="bg-black pb-4 ">
      <div className="mt-0 md:-mt-44 px-8 relative z-0 md:z-20">
        <MoviesList
          title={"Now Playing"}
          moviesList={Movies.nowPlayingMovies}
        />
        <MoviesList title={"Popular"} moviesList={Movies.popularMovies} />
        <MoviesList title={"Top Rated"} moviesList={Movies.topRatedMovies} />
        <MoviesList title={"Up Coming"} moviesList={Movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
