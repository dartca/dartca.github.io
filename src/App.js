import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './styles.css';

import {Navbar} from './components/Navbar'
import {Home} from './components/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
