import React, { Component } from 'react';
import LoginBox from './login.js';

class App extends Component{
    render(){
        return(
            <div>
                <TopBar/>
                <LoginBox />
                <Footer />
            </div>
    )
    }
}


const TopBar = ({ }) =>
    <header>
        Taskiro
    </header>;


const Footer = ({}) =>
    <footer>
        Taskiro. All rights reserved &copy;
    </footer>;







export default App;