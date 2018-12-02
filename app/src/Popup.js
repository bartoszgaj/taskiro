import React, { Component } from 'react';
import './Popup.css';
import broom from './resources/broom.png'
import car from './resources/car.png'
import cart from './resources/cart.png'
import dog from './resources/dog.png'
import lawn from './resources/lawn.png'
import leaf from './resources/leaf.png'
import snow from './resources/snow.png'
import trash from './resources/trash.png'
import ChooseType from "./ChooseType";
import Button from "react-bootstrap/es/Button";


class Popup extends React.Component {
    state={
        isEdit:false,
    }

    render() {
        return (
            <div className='popup'>
                {(!this.state.isEdit) ? <ChooseType closePopup={this.props.closePopup.bind(this)}/> : <Button onClick={this.props.closePopup}/>}
            </div>
        );
    }
}

export default Popup