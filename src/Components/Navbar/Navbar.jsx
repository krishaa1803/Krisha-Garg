import React from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import logo from '../../assets/logo.png'; // Keep your logo
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef } from 'react';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      {/* Menu open icon */}
      <FaBars onClick={openMenu} className="nav-mob-open" />
      
      {/* Navigation Menu */}
      <ul ref={menuRef} className="nav-menu">
        {/* Menu close icon */}
        <FaTimes onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" href="#home">Home</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about">About</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#experience">Experience</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#project">Projects</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#skills">Skills</AnchorLink></li>
      </ul>

      {/* Connect Section */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="marquee-content">
            LET'S CONNECT! • CONTACT ME • OR • JUST DROP IN TO SAY HI!
          </div>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
