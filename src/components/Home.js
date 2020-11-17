import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../styles.css';

import {Card} from './Card';

export const Home = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col s6 center">
                    <Card/>
                </div>
                <div className="col s6 center">
                    <Card/>
                </div>
            </div>
        </div>
    )
}