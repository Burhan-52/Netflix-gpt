export const NETFIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const NOW_PLAYING_MOVIE =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_MOVIE =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UP_COMING =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORT_LANGUAGE = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "turkish",
    name: "Turkish",
  },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
