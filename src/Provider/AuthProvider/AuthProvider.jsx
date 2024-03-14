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
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const axiosPublic = useAxiosPublic();

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
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // console.log(currentUser);
      const user = {
        image: currentUser.photoURL,
        name: currentUser.displayName,
        email: currentUser.email,
      };
      // console.log(user);
      const res = await axiosPublic.post("/users", user);
      // console.log(res.data);

      setUser(currentUser);

      setIsloading(false);
    });
    return () => unSubscribe();
  }, [axiosPublic]);

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
