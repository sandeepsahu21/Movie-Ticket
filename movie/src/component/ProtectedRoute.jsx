import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");

  return isLogin ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
