import { MoviesListProps } from ".";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ moviesList, title }: MoviesListProps) => {
  return (
    <div>
      <div className="text-xl md:text-2xl font-medium text-white py-2 px-4">
        {title}
      </div>
      <div className="flex overflow-x-scroll scrollbar-hide ">
        <div className="flex">
          {moviesList &&
            moviesList.map((movies: any) => (
              <MoviesCard key={movies.id} poster_path={movies.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
