import React, { Component } from 'react';
import SimpleMap from './MapContainer.js';
import TopBar from './TopBar.js';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Tutorial from "./Tutorial";



class Main extends Component{
    render(){
        return(
            <div>

                <Router>
                    <div>
                    <TopBar />
                    <Route exact path={"/map"} component={SimpleMap}/>
                    <Route path={"/tutorial"} component={Tutorial}/>
                    <Route path="*" render={() => (
                        <Redirect to="/map"/>
                    )}/>
                    </div>
                </Router>
                <Footer/>
            </div>
        )
    }
}






const Footer = ({}) =>
    <footer>
        Taskiro. All rights reserved &copy;
    </footer>;







export default Main;