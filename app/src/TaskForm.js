import React, { Component } from 'react';
import './TaskModal.css';
import broom from './resources/broom.png'
import car from './resources/car.png'
import cart from './resources/cart.png'
import dog from './resources/dog.png'
import lawn from './resources/lawn.png'
import leaf from './resources/leaf.png'
import snow from './resources/snow.png'
import trash from './resources/trash.png'


class TaskForm extends React.Component {




    render() {

        const d = new Date();
        const tomorrow = d.setDate(d.getDate() + 1);
        console.log(new Date(tomorrow).toISOString().slice(0, 10));
        return (
            <div className='chooseType'>
                <div className='popup_inner'>
                    <form>
                        <label>Tytuł: <input type="text" name="title" required/></label>
                        <label> Typ Taska:
                                <ul>
                                    <li><img src={car} alt="my image"  onClick={this.props.changePopupState} /></li>
                                    <li><img src={cart} alt="my image" onClick={this.props.changePopupState} /></li>
                                    <li><img src={dog} alt="my image" onClick={this.props.changePopupState} /></li>
                                    <li><img src={lawn} alt="my image" onClick={this.props.changePopupState} /></li>
                                    <li><img src={leaf} alt="my image" onClick={this.props.changePopupState} /></li>
                                    <li><img src={snow} alt="my image" onClick={this.props.changePopupState} /></li>
                                    <li><img src={trash} alt="my image" onClick={this.props.changePopupState} /></li>
                                    <li><img src={broom} alt="my image" onClick={this.props.changePopupState} /></li>
                                </ul>
                        </label>
                        <label>Lokalizacja: <input type="text" name="location" required /> </label>
                        <label>Wynagrodzenie (PLN): <input type="number" step="0.01" name="price" required /></label>
                        <label>Data Ważności:<input type="date" name="date" min={new Date(tomorrow).toISOString().slice(0, 10)} required /></label>
                        <label>Krótki Opis: <textarea name="description" required/></label>
                        <input type="submit" value="Dodaj Taska"/>
                    </form>


                </div>
            </div>
        );
    }


}

export default TaskForm;