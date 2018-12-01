
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';


export class MapContainer extends Component {

    state = {
        tasks: [{}]
    };

    componentDidMount() {
        this.retrieveTasks();
    }

    render() {
        return (
            <Map google={this.props.google}
                 style={{width: '100%', height: '100%', position: 'relative'}}
                 className={'map'}
                 zoom={14}
            initialCenter={{
                lat: 50.058119,
                lng: 19.943775
            }}>

                {this.state.tasks.map(function(task) {
                        return <Marker
                            name={task.title}
                            position={task.coords}
                        />
                    }
                )}

                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 37.778519, lng: -122.405640}} />
                <Marker
                    name={'Dolores park'}
                    position={{lat: 37.759703, lng: -122.428093}} />
                <Marker />
                <Marker
                    name={'Your position'}
                    position={{lat: 37.762391, lng: -122.439192}}
                    // icon={{
                        // url: "/path/to/custom_icon.png",
                        // anchor: new this.props.google.maps.Point(32,32),
                        // scaledSize: new this.props.google.maps.Size(64,64)
                  //  }}
            />
            </Map>
        );
    }

    retrieveTasks = () => {
        console.log('Retrieving tasks...');

        axios.get('/api/tasks')
            .then( (response) => {
                // handle success
                const tasksRtrv = response.data;
                this.setState({
                    tasks: tasksRtrv
                })
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            })
            .then( () => {
                // always executed
            });
    }

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBRFc0HsUJAA1JNf71DWH96Gs1Wdz6vb3E')
})(MapContainer)