import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadCurrentUser, addUser } from '../Redux/users/users';

const Login = () => {
  const [name, setName] = useState('');

  const onChangeHandle = (e) => (setName(e.target.value));

  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (name === '') {
      toast.error('Please Enter your name!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const user = users.find((user) => (user.name === name));
    if (user) {
      dispatch(loadCurrentUser(user));
      navigate('/doctors');
    } else {
      dispatch(addUser(name));
      navigate('/doctors');
    }
  };

  return (
    <div className="login-form">
      <form className="fom-control">
        <input className="form-control" type="text" placeholder="Enter your full name" value={name} onChange={onChangeHandle} />
        <input className="btn btn-primary mt-3" type="submit" onClick={onSubmitHandle} value="Login" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
