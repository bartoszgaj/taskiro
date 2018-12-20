import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from './TopBar.js';
import Content from './Content';


class App extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                <TopBar/>

                <Content />
                    </div>
                </Router>
                <Footer />
            </div>
        )
    }
}




const Footer = ({}) =>
    <footer>
        Taskiro. All rights reserved &copy;
    </footer>;

export default App;