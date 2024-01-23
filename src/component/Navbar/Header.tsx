import { NETFIX_LOGO, SUPPORT_LANGUAGE } from "../../constants/config";
import SIGN_OUT from "../assets/sign-out.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../store/userSlice";
import { ChangeEvent, useEffect } from "react";
import { setLanguage } from "../../store/languageSlice";
import { viewGptPage } from "../../store/gptSlice";
import { RootState } from "../../store/rootReducer";
import { stack as Menu } from "react-burger-menu";
import MenuItems from "./MenuItems";

export const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((store: RootState) => store.user);

  const isShowLanguage = useSelector(
    (store: RootState) => store.gpt.showGptSearch
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptSearch = () => {
    dispatch(viewGptPage());
  };

  const handleMultiLangauge = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 pl-5 md:pl-0 md:px-10 flex justify-between w-full  ">
      <div>
        <img className="w-32 md:w-48 " src={NETFIX_LOGO} alt="Netflix logo" />
      </div>
      <div className="hidden md:flex ">
        {user && (
          <MenuItems
            isShowLanguage={isShowLanguage}
            handleMultiLanguage={handleMultiLangauge}
            handleGptSearch={handleGptSearch}
            handleSignOut={handleSignOut}
            SUPPORT_LANGUAGE={SUPPORT_LANGUAGE}
          />
        )}
      </div>
      {/* desktop view */}
      <div className="md:hidden">
        <Menu right width={220} >
          <MenuItems 
            isShowLanguage={isShowLanguage}
            handleMultiLanguage={handleMultiLangauge}
            handleGptSearch={handleGptSearch}
            handleSignOut={handleSignOut}
            SUPPORT_LANGUAGE={SUPPORT_LANGUAGE}
          />
        </Menu>
      </div>
    </div>
  );
};
