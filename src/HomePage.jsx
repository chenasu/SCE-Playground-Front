import React, { useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (!token) {
      navigate('/'); 
    }
  }, [navigate]);

  const handleNavigateToLeads = () => {
    navigate('/leads');
  };

  const handleNavigateToProducts = () => {
    navigate('/products');
  };

  const handleSignOut = () => {
    Cookies.remove('authToken');
    navigate('/');
  };

  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Welcome to the Home Page</h1>
        <p className="home-text">You have successfully logged in!</p>
        <div className="button-container">
          <button className="home-button" onClick={handleNavigateToLeads}>
            Customer Leads
          </button>
          <button className="home-button" onClick={handleNavigateToProducts}>
            Product Catalogs
          </button>
        </div>
      </div>
      <div className="footer">
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </>
  );
}


export default HomePage;
