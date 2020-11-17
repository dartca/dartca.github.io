import React, {useEffect} from 'react';
import M from 'materialize-css'
import '../styles.css';
import {ArqImg} from '../utils/ImgName';

export const CarouselArq = () => {

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

    return(
        <div className="container">
            <div className="row">
                <br/><br/>
                <div className="col s12">
                    <h3 className="center-align">Arquitectura y Diseño</h3><br/>
                    <div className="carousel center-align">
                        {
                            ArqImg.map((imgA)=>{
                                return(
                                    <a className="carousel-item" href={"#"+imgA.title} key={imgA.title}>
                                        <img className="materialboxed" src={imgA.iman} alt="/"/>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}