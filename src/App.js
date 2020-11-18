import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './styles.css';

import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {CarouselArq} from './components/CarouselArq';
import {CarouselArt} from './components/CarouselArt';
import {Footer} from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/arqui">
            <CarouselArq/>
          </Route>
          <Route path="/arte">
            <CarouselArt/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
