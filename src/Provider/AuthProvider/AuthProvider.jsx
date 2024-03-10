import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const handleRegisterWithEmailAndPass = (email, password) => {
    setIsloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleUpdate = (name, photourl) => {
    setIsloading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  const handleLogin = (email, password) => {
    setIsloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogOut = () => {
    setIsloading(true);

    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setIsloading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    handleRegisterWithEmailAndPass,
    handleUpdate,
    handleLogin,
    user,
    isLoading,
    handleLogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
