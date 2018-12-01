
import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Button from "react-bootstrap/es/Button";
import AddTaskModal from "./AddTaskModal";


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        isOpen: false
    };


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    onAddButtonClicked = () => {

    }


    render() {
        return (
            <div>
                <Button style={{position: 'fixed', zIndex: 10, bottom: 80, right: 50}}
                onClick={this.onAddButtonClicked}>Dodaj<br/>Task</Button>

                <Map google={this.props.google}
                 onClick={this.onMapClicked}
                 initialCenter={{
                     lat: 50.06,
                     lng: 19.94
                 }}
                 defaultOptions={{
                     // these following 7 options turn certain controls off see link below
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
                 zoom={14}>

                <Marker
                    onClick={this.onMarkerClick}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 37.778519, lng: -122.405640}} />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Dolores park'}
                    position={{lat: 37.759703, lng: -122.428093}} />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Your position'}
                    position={{lat: 37.762391, lng: -122.439192}}
                    />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>

                </InfoWindow>
            </Map>


        </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBRFc0HsUJAA1JNf71DWH96Gs1Wdz6vb3E')
})(MapContainer)