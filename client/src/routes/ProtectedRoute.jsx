import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return token ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;