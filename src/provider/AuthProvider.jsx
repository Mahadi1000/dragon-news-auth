import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, updatedData);
    }
    return;
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const saveUser = (user) => {
    const currentUser = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      id: user.uid,
      token: user.accessToken,
    };
    localStorage.setItem("user", JSON.stringify(currentUser))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    updateUser,
    logOut,
    saveUser,
  };
  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  );
};
