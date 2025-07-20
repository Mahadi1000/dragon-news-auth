import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/auth/login"></Navigate>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
