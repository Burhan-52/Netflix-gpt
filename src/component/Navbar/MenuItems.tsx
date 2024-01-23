import { ChangeEvent } from "react";
import SIGN_OUT from "../../assets/sign-out.jpg";
import { MenuItemsProps } from ".";

const MenuItems = ({
  isShowLanguage,
  handleMultiLanguage,
  handleGptSearch,
  handleSignOut,
  SUPPORT_LANGUAGE,
}: MenuItemsProps) => {
  return (
    <div className="md:flex h-screen md:h-full items-center cursor-pointer ">
      {isShowLanguage && (
        <select className="my-2 p-2 rounded-lg" onChange={handleMultiLanguage}>
          {SUPPORT_LANGUAGE.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      )}

      <div
        onClick={handleGptSearch}
        className="text-white bg-red-700 text-base md:text-base p-2 w-24  rounded-lg mx-0 md:mx-5 text-center"
      >
        {isShowLanguage ? "Home" : "Gpt Search"}
      </div>
      <img
        className="hidden md:inline-block w-12 h-10"
        src={SIGN_OUT}
        alt="Sign out"
      />
      <div className="text-white ml-3 mt-3 md:mt-0" onClick={handleSignOut}>
        Sign out
      </div>
    </div>
  );
};

export default MenuItems;
