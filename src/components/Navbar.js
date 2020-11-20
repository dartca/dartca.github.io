import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {

    return(
        <nav class="animate__animated animate__fadeInDown">
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">DARTCA</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
            </ul>
            </div>
        </nav>
    )
}