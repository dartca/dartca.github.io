import React from 'react';
import '../styles.css';
import {ArqImg} from '../utils/ImgName';

export const CarouselArq = () => {

    return(
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
    )
}