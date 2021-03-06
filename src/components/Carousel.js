import React, {useEffect} from 'react';
import M from 'materialize-css'
import '../styles.css';

export const Carousel = (props) => {

    useEffect(() => {
        const elems00 = document.querySelectorAll('.carousel');
        M.Carousel.init(elems00, {
            duration: 250,
            dist: -90,
            shift: 20,
            padding: 5,
            numVisible: 3,
            indicators: true
        });

        var elems01 = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems01, {});
    },[]);

    return(
        <div className="container center">
            <div className="row">
                <div className="col s12">
                    <h3 className="center-align animate__animated animate__fadeInDown animate__delay-1s">
                        {props.title}
                    </h3><br/>
                    <div className="carousel center-align animate__animated animate__fadeInUp animate__delay-1s">
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
            <br></br><br></br>
        </div>
    )
}