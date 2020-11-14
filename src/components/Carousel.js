import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import M from 'materialize-css'

export const Carousel = () => {


    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                duration: 150,
                dist: -3
            });
            console.log(instances)
          });
        console.log("Hecho")
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1>Imagenes</h1>
                    <div className="carousel">
                        <a className="carousel-item" href="#one!">
                            <img src="https://lorempixel.com/250/250/nature/1" alt="#one!"/>
                        </a>
                        <a className="carousel-item" href="#two!">
                            <img src="https://lorempixel.com/250/250/nature/2" alt="#two!"/>
                        </a>
                        <a className="carousel-item" href="#three!">
                            <img src="https://lorempixel.com/250/250/nature/3" alt="#three!"/>
                        </a>
                        <a className="carousel-item" href="#four!">
                            <img src="https://lorempixel.com/250/250/nature/4" alt="#four!"/>
                        </a>
                        <a className="carousel-item" href="#five!">
                            <img src="https://lorempixel.com/250/250/nature/5" alt="#five!"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}