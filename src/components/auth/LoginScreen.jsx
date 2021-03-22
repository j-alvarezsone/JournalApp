import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValue, handleInputChange, reset] = useForm({
    email: 'jorge@gmail.com',
    password: '123456',
  });

  const { email, password } = formValue;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(1234, 'Jorge'));
  };

  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          className='auth__input'
          autoComplete='off'
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          className='auth__input'
          onChange={handleInputChange}
        />
        <button className='btn btn-primary btm-block' type='submit'>
          Login
        </button>

        <div className='auth__social-network'>
          <p>Login with social networks</p>
          <div className='google-btn'>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
