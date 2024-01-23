import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MoviesState {
  nowPlayingMovies: unknown[] | null;
  popularMovies: unknown[] | null;
  topRatedMovies: unknown[] | null;
  upComingMovies: unknown[] | null;
  trailer: unknown[] | null;
}

const initialState: MoviesState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upComingMovies: null,
  trailer: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<unknown[] | null>) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action: PayloadAction<unknown[] | null>) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action: PayloadAction<unknown[] | null>) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action: PayloadAction<unknown[] | null>) => {
      state.upComingMovies = action.payload;
    },
    addVideoTrailer: (state, action: PayloadAction<unknown[] | null>) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addVideoTrailer,
} = moviesSlice.actions;

export default moviesSlice.reducer;
