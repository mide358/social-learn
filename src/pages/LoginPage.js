import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/auth/authApi';
import '../App.css';

export const LoginPage = () => {
  const { register, handleSubmit, error } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userInfo } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      navigate('/');
    }
  }, [navigate, userInfo]);
  return (
    <div className="login-wrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && { error }}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-input"
            {...register('email')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-input"
            {...register('password')}
            required
          />
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};
