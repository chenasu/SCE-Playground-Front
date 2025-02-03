import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './SignUp.css';
import Cookies from 'js-cookie';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
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
      setPassword(input);
    }
  };

  const handleFullNameChange = (e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z ]*$/; 
    if (regex.test(input)) {
      setFullName(input);
    }
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z0-9._@-]+$/; 
    if (regex.test(input)) {
      setEmail(input);
    }
  };

  const onSignUpSuccess = () => {
    navigate("/homepage");
  };

  const handleSubmit = async () => {
    setError('');
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, fullName, email }),
      });

      const data = await response.json();
      if (response.status === 201) {
        Cookies.set('authToken', data.token, { expires: 30 }); 
        setError('');
        onSignUpSuccess();
      } else {
        setError(data.message);
      }
    } catch (error) {
        console.error("Error during login:", error.message || error);
        setError("The username already exists in the system.");
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h2>Sign Up</h2>
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </div>
        <div className="input-group">
          <label>Username</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="button-group">
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default SignUp;
