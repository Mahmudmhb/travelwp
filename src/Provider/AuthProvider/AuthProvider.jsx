import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
const Googleprovider = new GoogleAuthProvider();
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

  const handleLogOut = async () => {
    setIsloading(true);

    return signOut(auth).then(() => setUser(null));
  };
  const handleSignGoolge = () => {
    return signInWithPopup(auth, Googleprovider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
        const user = {
          image: currentUser.photoURL,
          name: currentUser.displayName,
          email: currentUser.email,
        };
        const res = await axiosPublic.post("/users", user);
      }

      // console.log(res.data);

      setIsloading(false);
    });
    return () => unSubscribe();
  }, [axiosPublic, user]);

  const authInfo = {
    handleRegisterWithEmailAndPass,
    handleUpdate,
    handleLogin,
    user,
    isLoading,
    handleLogOut,
    handleSignGoolge,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
