import React, { useState } from "react";
import { BACKGROUND_IMG } from "../../constants/config";
import { validateData } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import { User } from ".";

const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({
    name: "",
    emailorphone: "",
    password: "",
  });

  const [isSignInForm, setSignInForm] = useState<boolean>(true);

  const [errormsg, setErrorMsg] = useState<string | null>(null);

  const handleToggleSignIn = () => {
    setSignInForm((prev) => !prev);
  };

  const handleSignIn = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const validationResult = validateData(user.emailorphone, user.password);
    setErrorMsg(validationResult);
    if (validationResult) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, user.emailorphone, user.password)
        .then((userCredential) => {
          const userDetail = userCredential.user;

          updateProfile(userDetail, {
            displayName: user.name,
          })
            .then(() => {
              const currentUser = auth.currentUser;
              if (currentUser) {
                const { uid, email, displayName } = currentUser;
                dispatch(addUser({ uid, email, displayName }));
              }
            })
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, user.emailorphone, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <>
      <div>
        <img
          className=" bg-black absolute object-cover w-full h-full bg-cover filter brightness-50 "
          src={BACKGROUND_IMG}
          alt="background_img"
        />

        <form
          className="w-full md:w-3/12 absolute bg-black mx-auto px-12 bg-opacity-80 mt-60 md:mt-36 right-0 left-0 py-10"
          onSubmit={(e: React.FormEvent<EventTarget>) => handleSignIn(e)}
        >
          <div className="text-white text-3xl font-medium">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </div>
          {!isSignInForm && (
            <input
              className="w-full px-4 py-2 mt-4 rounded-sm bg-[#333] outline-none"
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          )}
          <input
            className="w-full px-4 py-2 mt-4 rounded-sm bg-[#333] outline-none"
            type="text"
            placeholder="Email or phone number"
            value={user.emailorphone}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, emailorphone: e.target.value }))
            }
          />
          <input
            className="w-full px-4 py-2 mt-4 rounded-sm bg-[#333] outline-none"
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {errormsg && <p className="text-red-500 my-2">{errormsg}</p>}
          <button
            className="w-full bg-red-700 mt-5 py-2 rounded-sm  text-white"
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-white mt-5">
            <span className="text-[#858585] ">
              {isSignInForm ? "New to Netflix? " : "Already registered? "}
            </span>{" "}
            <span className="cursor-pointer" onClick={handleToggleSignIn}>
              {isSignInForm ? "Sign Up Now." : "Sign In Now."}
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
