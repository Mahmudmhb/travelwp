import { createContext } from "react";
import app from "../../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const handleRegisterWithEmailAndPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleUpdate = (name, photourl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };
  const authInfo = {
    handleRegisterWithEmailAndPass,
    handleUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
