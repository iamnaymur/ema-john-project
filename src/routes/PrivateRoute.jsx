import React, { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import "./PrivateRoute.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }
 
  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
