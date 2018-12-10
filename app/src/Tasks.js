import React, { Component } from 'react';
import axios from "axios";
import Task from './Task.js';
import './styles/tasks.css'
import {Marker} from "google-maps-react";


class Tasks extends Component{

    constructor(props){
        super(props);

        this.state = {tasks: []};

        this.retrieveTasks = this.retrieveTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(id){

        const updatedTaskList = this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks: updatedTaskList});
        axios.delete('api/task/' + id).then(function (response) {
            console.log(response);
        }).catch(function(error){
            console.log(error);
        });

    }

    retrieveTasks(){
        const self = this;
        axios.get('/api/users/2/tasks')
            .then( function(response){
                console.log(response.data);
                const tasksRtrv = response.data;
                self.setState({
                    tasks: tasksRtrv
                });
            })
            .catch( function(error){
                console.log(error);
            })
    }


    componentDidMount() {
        this.retrieveTasks();
    }

    render(){

        return(
            <div id="task-box">
                <ul>
                {this.state.tasks.map((task, index) =>
                    <li key = {index}>
                        <Task
                        data = {task}
                        deleteTask={this.deleteTask}
                    /></li>
                )}
                </ul>
            </div>
        )
    }
}

export default Tasks;