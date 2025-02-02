import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import sceLogo from "./assets/sce_logo.png";
import jwtDecode from "jwt-decode";
import HomePage from "./HomePage";
import Leads from "./Leads";
import Products from "./Products";
import Login from "./Login";
import "./App.css";
import SignUp from "./SignUp";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.jsx";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: "", id: "" });

  const decodeToken = () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="))
      ?.split("=")[1];

    if (token) {
      const decoded = jwtDecode(token);
      setUserInfo({ username: decoded.username, id: decoded.id });
    } else {
      setUserInfo({ username: "", id: "" });
    }
  };

  // Update user info whenever the component mounts or the cookie changes
  useEffect(() => {
    decodeToken();
    
    const interval = setInterval(() => {
      decodeToken();  // This will check if the cookie changed at a regular interval
    }, 1000);  // Check every 1 second (adjust as needed)

    // Clean up interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-container">
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sceLogo} className="logo" alt="sce logo" />
              </a>
              <div className="form-container">
                {showLogin ? <Login /> : <SignUp />}
                <div className="switch-form">
                  <p>
                    {showLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                    <button onClick={() => setShowLogin(!showLogin)}>
                      {showLogin ? "Sign Up" : "Login"}
                    </button>
                  </p>
                </div>
                <div>
                  <HamburgerMenu />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/homepage"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/leads"
          element={
            <>
              <Leads />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Products />
            </>
          }
        />
        <Route
          path="/SignUp"
          element={
            <>
              <SignUp />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
      <HamburgerMenu />
      <UserDetails userInfo={userInfo} setUserInfo={setUserInfo} />
    </>
  );
}

export default App;
