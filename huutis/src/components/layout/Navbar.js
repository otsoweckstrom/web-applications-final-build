import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Brainstorm
        </Link>

        <ul className="left">
          <li></li>
        </ul>
        <ul className="right">
          <li>
            <SignedOutLinks />
          </li>
          <li>
            <SignedInLinks />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
