import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/TastebiteLogo.png'; // Importing the logo image
import './Nav.css';

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="Tastebite Logo" />
                </NavLink>

            </div>

            <div className="nav-list">
                <ul className="nav-items">
                    <li><NavLink exact to="/" activeClassName="active">Homepage</NavLink></li>
                    <li><NavLink to="/categories" activeClassName="active">Search</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
            </div>

            <div className="nav-search">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </div>
    );
};

export default NavBar;
