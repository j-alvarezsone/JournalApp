import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: 'Jorge',
    email: 'jorge@gmail.com',
    password: '123456',
    confirmPassword: '123456',
  });

  const { name, email, password, confirmPassword } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (validator.isEmpty(name)) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (
      !validator.equals(password, confirmPassword) &&
      !validator.isStrongPassword(password, [{ minLenght: 5 }])
    ) {
      dispatch(setError('Password should be at least 6 characters and match the password'));

      return false;
    }

    dispatch(removeError());

    return true;
  };

  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          className='auth__input'
          autoComplete='off'
          onChange={handleInputChange}
        />
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
        <input
          type='password'
          placeholder='confirmPassword password'
          name='confirmPassword'
          value={confirmPassword}
          className='auth__input'
          onChange={handleInputChange}
        />
        <button className='btn btn-primary btm-block mb-5' type='submit'>
          Register
        </button>

        <Link to='/auth/login' className='link'>
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
