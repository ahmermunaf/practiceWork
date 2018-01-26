import React from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
// Importing Components
import Home from './containers/Home';
import About from './containers/About';
import Team from './containers/Team';
import Contact from './containers/Contact';
import { ParallaxProvider } from 'react-scroll-parallax';

const customHistory=createBrowserHistory();

const Routes = () => (
    <ParallaxProvider>
    <Router history={customHistory} >
        <span>
            <Route exact path='/' component={Home} />
            <Route path='/aboutus' component={About} />
            <Route path='/contactus' component={Contact} />
            <Route path='/team' component={Team} />
        </span>
    </Router >
    </ParallaxProvider>
)
export default Routes;