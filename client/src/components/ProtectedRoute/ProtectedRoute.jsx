import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

const ProtectedRoute = ({children}) => {
  const { loggedInUser } = useAuth();

  return loggedInUser ? <>{children}</>: <Navigate to="/login" replace={true} />;
};
export default ProtectedRoute;
