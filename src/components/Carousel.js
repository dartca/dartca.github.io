import React, {useEffect,useState} from 'react';
import M from 'materialize-css'
import '../styles.css';
import {CarouselArq} from './CarouselArq'
import {CarouselArt} from './CarouselArt'

export const Carousel = () => {
    const [titulo,setTitulo] = useState('Arquitectura y Diseño')

    useEffect(() => {
        const elems00 = document.querySelectorAll('.carousel');
        const indic00 = M.Carousel.init(elems00, {
            duration: 250,
            dist: -90,
            shift: 20,
            padding: 5,
            numVisible: 3,
            indicators: true
        });

        var elems01 = document.querySelectorAll('.materialboxed');
        const indic01 = M.Materialbox.init(elems01, {});

        console.log(indic00);
        console.log(indic01);
    },[]);

    return (
        <div className="container">
            <div className="row">
                <br/><br/>
                <div className="col s6 center">
                    <button className="waves-effect waves-light btn-small"
                    onClick={(e) => {
                        e.preventDefault();
                        setTitulo("Arquitectura y Diseño");
                    }}>
                        Arquitectura
                    </button>
                </div>
                <div className="col s6 center">
                    <button className="waves-effect waves-light btn-small"
                    onClick={(e) => {
                        e.preventDefault();
                        setTitulo("Arte");
                    }}>
                        Arte
                    </button>
                </div>
                <div className="col s12">
                    <h3 className="center-align">{titulo}</h3><br/>
                    <CarouselArq/>
                    <br/><br/>
                    <CarouselArt/>
                </div>
            </div>
        </div>
    );
}