import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../styles.css';
import dart from '../img/dartca.png';

export const Card = () => {

    return(
        <div className="card">
            <div className="card-image">
                <img src={dart} alt="/" className="hover-zoom"/>
                <span className="card-title">Arquitectura y Diseño</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red" href="/">
                    <i className="material-icons">add</i>
                </a>
            </div>
            <div className="card-content">
                <p>Aquí puedes ver lo que tenga que ser</p>
            </div>
        </div>
    )
}