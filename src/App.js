import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './styles.css';

import {Carousel} from './components/Carousel'

function App() {
  return (
    <div>
       <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">DARTCA</a>
        </div>
      </nav>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
