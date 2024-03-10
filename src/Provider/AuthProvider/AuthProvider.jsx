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
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  const handleLogin = (email, password) => {
    setIsloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setIsloading(false);
    });
    return () => unSubscribe();
  }, []);

  const handleLogOut = () => {
    return signOut(auth);
  };

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
