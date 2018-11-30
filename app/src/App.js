import React, { Component } from 'react';
import LoginBox from './login.js';

class App extends Component{
    render(){
        return(
            <div>
                <TopBar/>
                <LoginBox />
            </div>
    )
    }
}

const TopBar = ({ }) =>
    <div id="topbar">
        Taskiro
    </div>;




export default App;