import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateLogin = () => {
    if (username === 'example' && password === 'password') {
      setErrorMessage(''); 
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-heading"> Admin Login</h2>
          <label className="login-label" htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="login-label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
          <Link to="/dash">
          <button className="login-button" type="button" onClick={validateLogin}>
            Login
            </button> </Link>
        </div>
        <p id="error-message">{errorMessage}</p>
      </div>
    </div></div>
  );
};

export default Login;
