import React from "react";
import { IMG_CDN } from "../../constants/config";
import { MoviesProps } from ".";


const MoviesCard = ({ poster_path }: MoviesProps) => {
  return (
    <div className="w-28 md:w-44 flex ml-2 md:ml-4 overflow-hidden ">
      <img
        className="cursor-pointer transition-transform transform hover:scale-105 "
        src={IMG_CDN + poster_path}
      />
    </div>
  );
};

export default MoviesCard;
