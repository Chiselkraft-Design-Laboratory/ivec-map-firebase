import React, { Component } from 'react';
import * as maptheme from './theme';
import {
    GoogleApiWrapper,
    Map, Marker
} from 'google-maps-react';

class View extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                initialCenter={this.props.mapCenter}
                center={this.props.mapCenter}
                zoom={this.props.mapZoom}
                disableDefaultUI={true}
                styles={this.props.darkMode ? maptheme.Dark : maptheme.Light}
            >
                <Marker
                    name={this.props.name}
                    title={this.props.title}
                    position={this.props.pos}
                />
            </Map>   
        );

    }
}

export default GoogleApiWrapper(
    { apiKey: process.env.REACT_APP_GOOGLEMAP_APIKEY }
)(View);

// balashankar 
// mathan
//  