import React, { useContext, useState } from 'react';
import { userContext } from '../context/userContext';

const LogInForm = () => {
    const {logInHandler}=useContext(userContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={(e)=>{
        e.preventDefault(logInHandler(username,password));
      }
      }>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <p>You can use any user's credentials from <a target="_blank" href='https://dummyjson.com/users'>Users</a></p>
    </div>
  );
};

export default LogInForm;
