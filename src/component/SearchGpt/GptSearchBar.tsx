import React, { ChangeEvent, useRef } from "react";
import { BACKGROUND_IMG } from "../../constants/config";
import { useSelector } from "react-redux";
import lang from "../../constants/languageConfig";
import openai from "../../utils/openai";
import { RootState } from "../../store/rootReducer";

const GptSearchBar = () => {
  const language = useSelector((store: RootState) => store.language.language);

  const searchInput = useRef<HTMLInputElement>(null!);

  const handleGptSearchCLick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const gptQuery =
      "Act as Movie recommendation system and suggest some movies for the Query" +
      searchInput.current.value +
      "only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Hera Pheri, chup chup ke, Jawan, KGF, cutputli";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // const json = await gptResults.json()

    // const MovieResult =

    console.log(gptResults);
  };

  return (
    <div className="w-full h-full absolute ">
      <img
        className=" bg-black fixed object-cover w-full h-full bg-cover filter brightness-50 -z-20 "
        src={BACKGROUND_IMG}
        alt="background_img"
      />
      <form
        className="md:mt-[10%] mt-[20%] mx-auto md:w-1/2 p-4 bg-black grid grid-cols-12 w-full"
        onSubmit={(e) => handleGptSearchCLick(e)}
      >
        <input
          ref={searchInput}
          className="col-span-9 px-4 py-3 "
          type="text"
          placeholder={lang[language]?.searchPlaceHolder}
        />
        <button
          className="col-span-3 bg-red-800 py-3 ml-4 rounded-lg"
          type="submit"
        >
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
