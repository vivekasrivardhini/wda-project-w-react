import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      console.log('Login successful');
      navigate('/dashboard'); 
    } else {
      alert('Invalid username or password (Hint: user/password)');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="container" style={{ maxWidth: '400px' }}>
        <div className="card border-0 shadow-lg" style={{ backgroundColor: 'rgba(0, 20, 40, 0.85)', border: '1px solid rgba(77, 208, 255, 0.4)' }}>
          <div className="card-body p-5">
            <h1 className="text-center mb-4" style={{ color: '#4dd0ff', textShadow: '0 0 12px rgba(77, 208, 255, 0.8)' }}>
              Dashboard Login
            </h1>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#cfe8ff' }}>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label" style={{ color: '#cfe8ff' }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;