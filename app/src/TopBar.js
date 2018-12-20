import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './styles/top-bar.css';

class TopBar extends Component{

    constructor(props) {
        super(props);
    }


    render(){


        return(
            <header>
                <img src="" alt="Logo" />
                <ul>
                    <li><Link to="/map" name="mapaPage" >Mapa</Link></li>
                    <li><Link to="/tasks" name="taskiPage" >Taski</Link></li>
                </ul>
            </header>
        )
    }
}

export default TopBar