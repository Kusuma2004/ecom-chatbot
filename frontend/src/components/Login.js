import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Assuming you create a separate CSS file for styles

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('auth_token', token); // Save token to localStorage
      // Handle the login action (e.g., redirect, update context)
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
          className="login-input"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
