import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";
const Navbar =()=>{
    return(
        <nav>
            
            <ul><Link to="/">
            <li>Home</li></Link>
            <Link to="/About">
            <li>About</li></Link>
            <Link to="/Project">
            <li>Project</li></Link>
            <Link to="/Gallery">
            <li>Gallery</li>
            </Link>
            <Link to="/Contact">
            <li>Contact</li></Link>
            </ul>
        </nav>
    );
};
export default Navbar;