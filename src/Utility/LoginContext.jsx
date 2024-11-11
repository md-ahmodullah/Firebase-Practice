import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase_init_.js";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setProfile(result.user);
      })
      .catch((error) => {
        console.log("ERROR : ", error);
        setProfile(null);
      });
  };

  const handleSignInGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setProfile(result.user);
      })
      .catch((error) => {
        console.log("ERROR : ", error);
        setProfile(null);
      });
  };

  const signOut = () => {
    setProfile(null);
  };

  return (
    <LoginContext.Provider
      value={{ profile, handleSignInGoogle, handleSignInGithub, signOut }}
    >
      {children}
    </LoginContext.Provider>
  );
};
