import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../styles.css';
import dart from '../img/dartca.png';
import arte from '../img/Arte/a1.png'

import {Card} from './Card';

export const Home = () => {

    return(
        <div>
            <div className="row">
                <div className="col s4 center">
                    <h1>Aqui va algo</h1>
                </div>
                <div className="col s4 center">
                    <Card img={dart} title="Arquitectura y Diseño" content="Algo relacionado con la arquitectura"/>
                </div>
                <div className="col s4 center">
                    <Card img={arte} title="Arte" content="Algo relacionado con el arte"/>
                </div>
            </div>
        </div>
    )
}