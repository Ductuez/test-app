import Image from "next/image";
import React from "react";
import logo from "@/logo.png";
import headerImg from "@/header-img.png";
import "./Header.css";

const Header = () => {
  return (
    <div className='c-header'>
      <div className='section'>
        <div className='c-header-logo'>
          <Image src={logo} alt='logo' />
        </div>
        <div className='c-header-sub'>
          <div className='c-header-content'>
            <p>Handicrafted by</p>
            <p>Jim HLS</p>
          </div>
          <div className='c-header-img'>
            <Image src={headerImg} alt='img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
