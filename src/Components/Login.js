import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrentUser } from '../Redux/users/users';
import { addUser } from '../Redux/users/users';
const Login = () => {
    const current_user = useSelector((state) => state.users.current_user)
    const [name, setName] = useState('');
    const onChangeHandle = e => (setName(e.target.value))
    const dispatch = useDispatch()
    const onSubmitHandle = (e) => {
        e.preventDefault()
        // dispatch(addUser(name))
        dispatch(loadCurrentUser(name));
        if(!current_user.name) addCurrentUser();
    }
    const addCurrentUser =() => {
       dispatch(addUser(name))
    }
 return(<div>
    <form>
      <input className="form-control" type="text" placeholder="Enter your full name" value={name} onChange={onChangeHandle}/>
      <input className="btn btn-primary" type="submit" onClick={onSubmitHandle} />
    </form>
  </div>
  );
};

export default Login;
