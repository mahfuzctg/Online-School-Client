import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //GoogleProvider
  const GoogleProvider = new GoogleAuthProvider();
  // CreateUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //LogIn
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  // LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // updateUserProfile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
      //token
      if (currentUser) {
        axios
          .post(
            "https://online-school-server-2xblin5so-mahfuzctg.vercel.app/jwt",
            {
              email: currentUser.email,
            }
          )
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // authInfo
  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    updateUserProfile,
    GoogleLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
