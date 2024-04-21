import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
// import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const checkLogin = async () => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      // window.location.href = "/login";
      setAuth(true);
      return;
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);

  const handleLogout = async () => {
    Cookies.remove("authToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("authToken"); // Clear authentication status on logout
    setAuth(false);
    checkLogin();
  };

  return (
    <div className="nav-conatiner">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">DevLHB</a>
        </div>

        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          {/* This can be styled as a hamburger icon */}
        </button>

        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <a href="/blogs" className="navbar-link">
            HOME
          </a>
          <a href="/about" className="navbar-link">
            ABOUT
          </a>
          <a href="/#" className="navbar-link">
            CODINGNIGHTSCHOOL
          </a>
          {/* <a href="/contact" className="navbar-link">
            Contact
          </a> */}
          {auth ? (
            <button type="" className={styles.logout} onClick={handleLogout}>
              logout
            </button>
          ) : (
            <button
              type=""
              className={styles.logout}
              onClick={() => {
                window.location.href = "/portfolio";
              }}
            >
              portfolio
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
