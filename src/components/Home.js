import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../styles.css';
import arte from '../img/Arte/a1.png'
import cText from '../img/c_texto.png'
import sFond from '../img/Arquitectura/4.png'

import {Card} from './Card';

export const Home = () => {

    return(
        <div>
            <div className="row">
                <div className="col s4 center">
                    <div className="card black white-text">
                        <div className="card-image">
                            <img src={cText} alt="/"/>
                        </div>
                    </div>
                    <h4>¿Qué es Dartca?</h4>
                </div>
                <div className="col s4 center">
                    <Card img={sFond} title="Arquitectura y Diseño" liga="/arqui"/>
                </div>
                <div className="col s4 center">
                    <Card img={arte} title="Arte" liga="/arte"/>
                </div>
            </div>            
        </div>
    )
}