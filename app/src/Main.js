import React, { Component } from 'react';
import SimpleMap from './MapContainer.js';
import TopBar from './TopBar.js';



class Main extends Component{
    render(){
        return(
            <div>
                <TopBar />
                <SimpleMap />
                <Footer />
            </div>
        )
    }
}






const Footer = ({}) =>
    <footer>
        Taskiro. All rights reserved &copy;
    </footer>;







export default Main;