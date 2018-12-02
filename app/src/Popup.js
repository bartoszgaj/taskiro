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
import TaskDescription from "./TaskDescription";


class Popup extends React.Component {
    state={
        isEdit:false,
    };

    changePopupState() {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }


    render() {
        return (
            <div className='popup'>
                {(!this.state.isEdit) ?
                    <ChooseType closePopup={this.props.closePopup.bind(this)} changePopupState={this.changePopupState.bind(this)}/>
                    : <TaskDescription closePopup={this.props.closePopup.bind(this)}/>}
            </div>
        );
    }
}

export default Popup