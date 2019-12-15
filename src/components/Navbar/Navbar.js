import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className='nav-ul'>
                <li className='nav-li'><NavLink to='/'>Home</NavLink></li>
                <li className='nav-li'><NavLink to='/suitcase'>My Suitcase</NavLink></li>
                <li className='nav-li'><NavLink to='/contacts'>Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;