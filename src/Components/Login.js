import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadCurrentUser, addUser } from '../Redux/users/users';

const Login = () => {
  const [name, setName] = useState('');

  const onChangeHandle = (e) => (setName(e.target.value));

  const currentUser = useSelector((state) => state.users.current_user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(loadCurrentUser(name));
    if (!currentUser.name) dispatch(addUser(name));
    navigate('/doctors');
  };

  return (
    <div>
      <form>
        <input className="form-control" type="text" placeholder="Enter your full name" value={name} onChange={onChangeHandle} />
        <input className="btn btn-primary" type="submit" onClick={onSubmitHandle} />
      </form>
    </div>
  );
};

export default Login;