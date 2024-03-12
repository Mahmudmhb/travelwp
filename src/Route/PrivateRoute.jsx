import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return (
      <div className="flex flex-col  justify-center gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
