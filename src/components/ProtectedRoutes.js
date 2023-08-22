import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const {user} = UserAuth()

  if (!user) {
    return navigate('/')
  } else {
    return children;
  }
};

export default ProtectedRoute;``