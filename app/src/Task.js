import React, { Component } from 'react';
import axios from "axios";
import qs from "qs";


class Task extends Component {

    constructor(props) {

        super(props);
        console.log(props);

        this.modifyTask = this.modifyTask.bind(this);
    }

    displayForm(event){
        const elements = event.target.parentElement.parentElement.childNodes;

        for(let element of elements){
            element.style.display = element.tagName === 'SPAN' || element.tagName === 'DIV' ? 'none' : 'block';
        }
        /*document.querySelector(".task[key='" + t"'] form").style.display = 'block';
        document.querySelector(".task .buttons").style.display = 'none';
        const taskInfo = document.querySelectorAll(".task span");
        for(let span of taskInfo){
            span.style.display = 'none';
        }*/

    }

    hideForm(event){
        const elements = event.target.parentElement.parentElement.childNodes;

        for(let element of elements){
            element.style.display = element.tagName === 'FORM' ? 'none' : 'block';

            if(element.tagName === 'DIV'){
                element.style.display = 'flex';
            }
        }

    }

    modifyTask(event){
        event.preventDefault();
    }

    render(){

        const d = new Date();
        const tomorrow = d.setDate(d.getDate() + 1);
        console.log(new Date(tomorrow).toISOString().slice(0, 10));

        return(
            <div className="task">
                <h3>{this.props.data.title}</h3>
                <div className="buttons">
                    <button className="modify" onClick={this.displayForm}>Modyfikuj</button>
                    <button className="delete" onClick={() => this.props.deleteTask(this.props.data.id)}>Usuń</button>
                </div>
                <span><b>Typ:</b> {this.props.data.type}</span>
                <span><b>Opis:</b> <br/>{this.props.data.description}</span>
                <span><b>Wynagrodzenie:</b> {this.props.data.price} PLN</span>
                <span><b>Data dodania: </b>{this.props.data.addTime.substring(0,10)}</span>
                <span><b>Data wygaśnięcia: </b>{this.props.data.deadline.substring(0,10)}</span>
                <form onSubmit={this.modifyTask}>
                    <label><input type="text" name="title" value={this.props.data.title} required/></label>
                    <label><textarea name="description" value={this.props.data.description} required/></label>
                    <label><input type="number" name="price" value={this.props.data.price} required/></label>
                    <label><input type="date" name="deadline"  min={new Date(tomorrow).toISOString().slice(0, 10)} required/></label>
                    <label>
                        <select name="type" required>
                            <option>{this.props.data.type}</option>
                            {['CAR', 'SHOP', 'DOG', 'LAWN', 'LEAF', 'SNOW', 'TRASH', 'BROOM'].filter(name => name !== this.props.data.type).map(name => <option>{name}</option>)}
                        </select>
                    </label>
                    <input type="submit" value="Zapisz zmiany"/>
                    <button onClick={this.hideForm}> Anuluj zmiany</button>
                </form>

            </div>
        )
    }
}

export default Task;