import React from 'react';
import '../styles.css';
import {ArtImg} from '../utils/ImgName';

export const CarouselArt = () => {

    return(
        <div className="carousel center-align">
            {
                ArtImg.map((imgA)=>{
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