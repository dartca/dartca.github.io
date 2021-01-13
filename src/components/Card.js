import React from 'react';
import {Link} from "react-router-dom";

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../styles.css';


export const Card = (props) => {

    return(
        <div className="card black white-text animate__animated animate__fadeIn animate__delay-3s">
            <div className="card-image">
                <Link to={props.liga}>
                    <img src={props.img} alt="#here!" className="hover-zoom"/>
                </Link>
                <div className="card-title">{props.title}</div>
            </div>
        </div>
    )
}