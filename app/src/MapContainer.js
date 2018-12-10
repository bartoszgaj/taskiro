import React, { Component } from 'react';
import axios from 'axios';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Button from "react-bootstrap/es/Button";
import './MapContainer.css'
import TaskModal from "./TaskModal";

export class MapContainer extends Component{

    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            tasks: [],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            showPopup: false,
        };


        this.togglePopup = this.togglePopup.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
    }


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }




    retrieveTasks(){
        const self = this;
        axios.get('/api/tasks')
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

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onMapClick(props){
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    componentDidMount() {
        this.retrieveTasks();
    }


    render(){
        return (
            <div id="map">
                <Button id="add-task-button" style={{zIndex: 10}}
                        onClick={this.togglePopup}>+</Button>


                {this.state.showPopup ?
                    <TaskModal
                        text='Close Me'
                        closePopup={this.togglePopup}
                    />
                    : null
                }


                <Map google={this.props.google}
                     onClick={this.onMapClick}
                     initialCenter={{
                         lat: 50.06,
                         lng: 19.94
                     }}
                     defaultOptions={{
                         streetViewControl: false,
                         scaleControl: false,
                         mapTypeControl: false,
                         panControl: false,
                         zoomControl: false,
                         rotateControl: false,
                         fullscreenControl: false
                     }}
                     disableDefaultUI
                     style={{width: '100%', height: '100%', position: 'relative',zIndex: 0}}
                     className={'map'}
                     zoom={14}
                >

                    {this.state.tasks.map((task,index) =>
                        <Marker
                            onClick={this.onMarkerClick}
                            name={task.title}
                            position={task.coords}
                            key = {index}
                        />
                    )}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}/>

                </Map>


            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBRFc0HsUJAA1JNf71DWH96Gs1Wdz6vb3E')
})(MapContainer)

