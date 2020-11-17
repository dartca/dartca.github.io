import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../styles.css';


export const Card = (props) => {

    return(
        <div className="card black white-text">
            <div className="card-image">
                <img src={props.img} alt="/" className="hover-zoom" onClick={()=>{}}/>
                <span className="card-title">{props.title}</span>
            </div>
            <div className="card-content">
                <p>{props.content}</p>
            </div>
        </div>
    )
}