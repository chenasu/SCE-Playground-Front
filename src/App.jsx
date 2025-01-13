import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import sceLogo from './assets/sce_logo.png';
import HomePage from './HomePage';
import Leads from './Leads';
import Products from './Products';

import './App.css';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.jsx';


function App() {

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [Error, setError] = useState(''); 
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

  const handleSubmit = async () => {
    setError('');
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password: pass })
      });
      
      const data = await response.json();
      console.log('Response Status:', response.status);
      console.log('Response Body:', data);
      if (response.status === 201) {
        setError('');
        navigate("/homepage");
      } else {
        setError(data.message); 
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("The username already exists in the system.");
    }
  };

  const handleLogIn = async () => {
    setError('');
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password: pass })
      });

      const data = await response.json();
      console.log('Response Status:', response.status);
      console.log('Response Body:', data);
      if (response.status === 200) {
        setError('');
        navigate("/homepage");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error.message || error);
      setError("Incorrect username or password.");
    }
  };

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={sceLogo} className="logo" alt="sce logo" />
              </a>
              <div>
                <label>User Name</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={handleUsernameChange}
                />
              </div>
              <div>
                <label>Password</label>
                <input 
                  type="password" 
                  value={pass} 
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <button onClick={handleSubmit}>Sign up</button>
                <button onClick={handleLogIn}>Login</button>
              </div>
              <div>
                {Error && <p className="error">{Error}</p>}
              </div>
            </div>
          }
        />
        <Route path="/homepage" element={<><HomePage /></>} />
        <Route path="/leads" element={<><Leads /></>} /> 
        <Route path="/products" element={<><Products /></>} /> 
      </Routes>
      <HamburgerMenu />
    </>
  );
}  
export default App;