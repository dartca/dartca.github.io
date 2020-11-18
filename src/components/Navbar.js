import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {

    return(
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">DARTCA</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/arqui">Prueba</Link></li>
            </ul>
            </div>
        </nav>
    )
}