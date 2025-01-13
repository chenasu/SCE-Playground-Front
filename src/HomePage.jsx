import './HomePage.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Leads from './Leads';
import Products from './Products';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigateToLeads = () => {
    navigate('/leads');
  };

  const handleNavigateToProducts = () => {
    navigate('/products');
  };

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <div className="home-container">
              <h1 className="home-title">Welcome to the Home Page</h1>
              <p className="home-text">You have successfully logged in!</p>
              <div className="button-container">
                <button className="home-button" onClick={handleNavigateToLeads}>Customer Leads</button>
                <button className="home-button" onClick={handleNavigateToProducts}>Product Catalogs</button>
              </div>
            </div>
          }
        />
        <Route path="/leads" element={<><Leads /><HamburgerMenu /></>} />
        <Route path='/products' element={<><Products /><HamburgerMenu /></>} />
      </Routes>
    </>
  );
}

export default HomePage;