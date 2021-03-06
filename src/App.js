import React,{useEffect,useState} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import {ArqImg, ArtImg} from './utils/ImgName';
import './styles.css';

import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Footer} from './components/Footer';
import {Carousel} from './components/Carousel';

import {Loader} from './components/Loader'

function App() {

  const [show, setShow] = useState(true)

  useEffect(()=>{
    setTimeout(verInfo,2000)
  })

  function verInfo(){
    setShow(false)
  }

  return (
    <Router basename="/">
      <div>
        { show ? <Loader/> : null }
        <Navbar/>
        <Switch>
          <Route path="/arqui">
            <Carousel title="Arquitectura y Diseño" imgs={ArqImg}/>
          </Route>
          <Route path="/arte">
            <Carousel title="Arte" imgs={ArtImg}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
