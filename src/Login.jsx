import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './Login.css'; 

function Login( ) {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z0-9]*$/;
    if (regex.test(input)) {
      setUsername(input);
    }
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z0-9]*$/;
    if (regex.test(input)) {
      setPass(input);
    }
  };

  const onLoginSuccess = () => {
    navigate("/homepage");
  };

  const handleLogIn = async () => {
    setError('');
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password: pass }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setError('');
        onLoginSuccess();  // callback function passed as prop to notify App about success
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error.message || error);
      setError("Incorrect username or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome</h2>
        <div className="input-group">
          <label>User Name</label>
          <input 
            type="text" 
            value={username} 
            onChange={handleUsernameChange} 
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={pass} 
            onChange={handlePasswordChange} 
          />
        </div>
        <div className="button-group">
          <button onClick={handleLogIn}>Login</button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
