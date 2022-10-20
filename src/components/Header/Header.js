import React from "react";
import Logo from "../../assets/logos/AY_logo_header.png";
import "./Header.css";
import { Link } from "react-router-dom";
import DropdownProfile from "../Common/DropdownProfile";

const Header = () => {
  return (
    <div className="bg-[#FFF3E9]">
      <nav className="flex justify-between items-center h-20 max-w-[1440px] px-8 md:px-20 mx-auto">
        <Link to="/">
          <img
            src={Logo}
            className="h-[60px] w-[220px] cursor-pointer"
            alt=""
          />
        </Link>
        <div className="flex items-center ml-10">
          <p className="hidden md:block text-base font-">About Us</p>

          <p className="hidden md:block ml-10 lg;ml-16 mr-20 lg:mr-28 text-base font-light">
            Our Programs
          </p>

          <DropdownProfile align="right" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
