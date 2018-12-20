import React, { Component } from 'react';
import '../../styles/map.css';


class Pane extends Component{
    constructor(props){
        super(props);
        console.log(props);

        this.reserveTask = this.reserveTask.bind(this);
    }

    reserveTask(){
        console.log("Reserve task ");
    }

    render(){
        return(
            <div className="task-marker">
                <span>{this.props.task.title}</span>
                <span>Typ:</span>
                <span>{this.props.task.type}</span>
                <span>Opis:</span>
                <span>{this.props.task.description}</span>
                <span>Wynagrodzenie</span>
                <span>{this.props.task.price} PLN</span>
                <span>Data wygaśnięcia:</span>
                <span>{this.props.task.deadline}</span>
                <button onClick={this.reserveTask}>Wykonaj zadanie</button>
            </div>
        )

    }}

export default Pane;