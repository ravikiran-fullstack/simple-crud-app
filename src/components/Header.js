import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname.includes("/update"));
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (
      location.pathname === "/add" ||
      location.pathname.includes("/update")
    ) {
      setActiveTab("AddUser");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  return (
    <div className='header'>
      <p className='logo'>User Management System</p>
      <div className='headerRight'>
        <Link to='/'>
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>

        <Link to='/add'>
          <p
            className={`${activeTab === "AddUser" ? "active" : ""}`}
            onClick={() => setActiveTab("AddUser")}
          >
            Add User
          </p>
        </Link>

        <Link to='/about'>
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
