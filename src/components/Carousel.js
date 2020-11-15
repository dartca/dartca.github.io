import React, {useEffect} from 'react';
import M from 'materialize-css'
import '../styles.css';
// import {Item} from './Item';

export const Carousel = () => {
    const num = 4;
    // const [lista,setLista] = useState([]);

    useEffect(() => {
        const elems00 = document.querySelectorAll('.carousel');
        const indic00 = M.Carousel.init(elems00, {
            duration: 250,
            dist: -90,
            shift: 20,
            padding: 5,
            numVisible: 5,
            indicators: true
        });

        var elems01 = document.querySelectorAll('.materialboxed');
        const indic01 = M.Materialbox.init(elems01, {});

        let aux = [];
        for(let i=1; i<=num; i++){
            aux.push(i)
        }
        // setLista(aux);
        console.log(indic00);
        console.log(indic01);
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1 className="center-align">Imagenes</h1>
                    <div className="carousel center-align">
                        <a className="carousel-item" href="#1">
                            <img className="materialboxed" src="https://lorempixel.com/250/250/nature/1" alt="/"/>
                        </a>
                        <a className="carousel-item" href="#2">
                            <img className="materialboxed" src="https://lorempixel.com/250/250/nature/2" alt="/"/>
                        </a>
                        <a className="carousel-item" href="#3">
                            <img className="materialboxed" src="https://lorempixel.com/250/250/nature/3" alt="/"/>
                        </a>
                        <a className="carousel-item" href="#4">
                            <img className="materialboxed" src="https://lorempixel.com/250/250/nature/4" alt="/"/>
                        </a>
                        <a className="carousel-item" href="#5">
                            <img className="materialboxed" src="https://lorempixel.com/250/250/nature/5" alt="/"/>
                        </a>
                    </div>
                </div>
            </div>
            {/* <Item num={20}></Item> */}
        </div>
    );
}