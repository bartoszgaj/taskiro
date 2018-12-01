
import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Pane from "./Pane";


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
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


    render() {
        return (
            <Map google={this.props.google}
                 onClick={this.onMapClicked}
                 style={{width: '100%', height: '100%', position: 'relative'}}
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
                    <Pane/>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBRFc0HsUJAA1JNf71DWH96Gs1Wdz6vb3E')
})(MapContainer)