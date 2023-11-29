import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../features/auth/authApi';

export const HomePage = () => {
  const { loading, userInfo } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome to your page {userInfo ? userInfo.email : ''} </h1>
      <Link to="/login"> Go to Login</Link>
    </div>
  );
};
