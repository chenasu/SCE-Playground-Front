import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import sceLogo from './assets/sce_logo.png';
import HomePage from './HomePage';
import Leads from './Leads';
import Products from './Products';
import Login from './Login';  // import the new Login component
import './App.css';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.jsx';

function App() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/homepage");
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
              <Login onLoginSuccess={handleLoginSuccess} /> {/* Use Login component here */}
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
