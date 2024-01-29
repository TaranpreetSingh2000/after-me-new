import React from "react";
import Social from "../social/Social";
import style from "./Navbar.module.css";
import {  useLocation, useNavigate } from 'react-router-dom';

const logo = "http://dev.ayasya.de/wp-content/uploads/2024/01/cropped-ayasya-logo-1.png";

const Navbar = () => {
const navigate= useNavigate();

  const handlelinkhome=()=>{
  navigate('/strapidata');
  }
  const location = useLocation();
  const { picture, givenName, otpnumber } = location.state || {};
  return (
    <div className={`container ${style.navbar}`}>
        <img className={style.image} src={logo} onClick={handlelinkhome} />

      <div className={`profile-section ${style.profileSection}`}>
        <Social />
        <a className="navbar-brand ms-2" href="#" > Welcome, {otpnumber ? otpnumber : givenName}
        </a>

        {picture && <img src={picture} alt='User Profile' className={style.profileicon} />}
      </div>
    </div>
  );
};

export default Navbar;
