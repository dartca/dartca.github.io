import React,{useEffect,useState} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'animate.css/animate.min.css';
import '../styles.css';
import arte from '../img/Arte/a1.png'
import cText from '../img/c_texto.png'
import sFond from '../img/Arquitectura/4.png'

import {Card} from './Card';
import {Loader} from './Loader'

export const Home = () => {

    const [show, setShow] = useState(true)

    useEffect(()=>{
        setTimeout(verInfo,2000)
    })

    function verInfo(){
        setShow(false)
    }

    return(
        <div>
            { show ? <Loader/> : null }
            <div className="row">
                <div className="col s4 center">
                    <div className="card black white-text">
                        <div className="card-image animate__animated animate__backInLeft animate__delay-2s">
                            <img src={cText} alt="/"/>
                        </div>
                    </div>
                    <h4 className="animate__animated animate__backInLeft animate__delay-2s">¿Qué es Dartca?</h4>
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