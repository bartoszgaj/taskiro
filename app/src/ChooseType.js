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


class ChooseType extends React.Component {




    render() {
        return (
            <div className='chooseType'>
                <div className='popup_inner'>
                    <table>
                        <tr>
                            <td><button><img src={car} alt="my image"   /></button></td>
                            <td><button><img src={cart} alt="my image" onClick={this.buttonClicked} /></button></td>
                            <td><button><img src={dog} alt="my image" onClick={this.buttonClicked} /></button></td>
                            <td><button><img src={lawn} alt="my image" onClick={this.buttonClicked} /></button></td>
                        </tr>
                        <tr>
                            <td><button><img src={leaf} alt="my image" onClick={this.buttonClicked} /></button></td>
                            <td><button><img src={snow} alt="my image" onClick={this.buttonClicked} /></button></td>
                            <td><button><img src={trash} alt="my image" onClick={this.buttonClicked} /></button></td>
                            <td><button><img src={broom} alt="my image" onClick={this.buttonClicked} /></button></td>
                        </tr>
                    </table>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }

    buttonClicked() {
    }
}

export default ChooseType