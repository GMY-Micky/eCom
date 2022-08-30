import React, { useState,useEffect } from "react";
import "../css/header.css";
import { Link, useNavigate } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";

const Header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  const [userName, setUserName] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const firstName =  useSelector(state =>state.profile.value)

  useEffect(() => {
    setUserName(true);
  }, [firstName])

  const navigate = useNavigate();

  const user = () => {
    setUserMenu(!userMenu);
  };

  const signout = () => {
    localStorage.clear();
    setUserName(false);
    setUserMenu(false);
    navigate("/login");
  };

  const handleMenu = () => {
    if (clickSearch === true) {
      setClickSearch(false);
    }
    setClickMenu(!clickMenu);
  };

  const handleSearch = () => {
    if (clickMenu === true) {
      setClickMenu(false);
    }
    setClickSearch(!clickSearch);
  };

  return (
    <div className="header">
      <div className="left-head">
        <div className="sidebar-menu">
          <button onClick={handleMenu} className="sidebar-menu-btn">
            <i className={clickMenu ? "fas fa-times" : "fas fa-bars"} />
          </button>
          {clickMenu && <SideBarMenu />}
        </div>
        <div className="header-search">
          <button onClick={handleSearch} className="search-btn">
            <i className="fas fa-search search-icon" />
          </button>
          {clickSearch && (
            <input className="search-bar" type="text" placeholder="search" />
          )}
        </div>
      </div>
      <div>
        <Link to="/" className="header-logo">
          <i className="fas fa-dollar-sign" /> ECOM
        </Link>
      </div>
      <div className="header-icons">
        <Link to="/login" className="sign-in-logo">
          <i className="fas fa-user-circle"></i>
        </Link>
      </div>
      <div className="header-links">
        {!userName ? (
          <Link to="/login" className="sign-in-link">
            sign in
          </Link>
        ) : (
          <div className="user-info" onClick={user}>
            <i className="fas fa-user-circle" style={{ margin: "0px 5px" }}></i>
            <span className="user-name">{firstName}</span>
            <BiChevronDown className="down-arrow" />
            {userMenu && (
              <div className="signout-btn">
                <p onClick={signout}>log Out</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
