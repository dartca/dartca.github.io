import React, {useEffect} from 'react';
import M from 'materialize-css'
import '../styles.css';

export const Carousel = (props) => {

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
                    <h3 className="center-align">{props.title}</h3><br/>
                    <div className="carousel center-align">
                        {
                            props.imgs.map((imgA)=>{
                                return(
                                    <div className="carousel-item" key={imgA.title}>
                                        <img className="materialboxed" src={imgA.iman} alt="#here!"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}