import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Extract isAuthenticated

  return isAuthenticated ? children : <Navigate to="/user/signin" />;
}

export default ProtectedRoute;
