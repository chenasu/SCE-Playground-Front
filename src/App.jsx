import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import sceLogo from './assets/sce_logo.png';
import HomePage from './HomePage';
import Leads from './Leads';
import Products from './Products';
import Login from './Login';  // import the new Login component
import './App.css';
import SignUp from './SignUp';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.jsx';

function App() {
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(true); 
  const navigate = useNavigate();


  return (
      <>
      <Routes>
          <Route
              path='/'
              element={
                  <div className="main-container">
                      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                          <img src={sceLogo} className="logo" alt="sce logo" />
                      </a>
                      <div className="form-container">
                          {showLogin ? <Login /> : <SignUp />}
                          <div className="switch-form">
                              <p>
                                  {showLogin ? "Don't have an account?" : "Already have an account?"}
                                  <button onClick={() => setShowLogin(!showLogin)}>
                                      {showLogin ? "Sign Up" : "Login"}
                                  </button>
                              </p>
                          </div>
                      </div>
                  </div>
              }
          />
        <Route path="/homepage" element={<><HomePage /></>} />
        <Route path="/leads" element={<><Leads /></>} /> 
        <Route path="/products" element={<><Products /></>} /> 
        <Route path="/SignUp" element={<><SignUp /></>} /> 
        <Route path="/Login" element={<><Login /></>} /> 
      </Routes>
      <HamburgerMenu />
    </>
  );
}  

export default App;
