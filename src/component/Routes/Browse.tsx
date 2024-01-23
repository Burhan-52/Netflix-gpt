import { MainContainer } from "../Trailer/MainContainer";
import SecondaryContainer from "../Movies/SecondaryContainer";
import { Header } from "../Navbar/Header";
import { useNowPlayingMovie } from "../../hooks/useNowPlayingMovie";
import { usePopularMovie } from "../../hooks/usePopularMovie";
import { useTopRatedMovie } from "../../hooks/useTopRatedMovie";
import { useUpComingMovie } from "../../hooks/useUpComingMovie";
import GptSearch from "../SearchGpt/GptSearch";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpComingMovie();

  const toggle = useSelector((store: RootState) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {toggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
