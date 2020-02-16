import React from 'react';
import * as maptheme from './theme';
import {
    GoogleApiWrapper,
    Map
} from 'google-maps-react';

const View = (props) => {
    return (
        <Map
        google={props.google}
        initialCenter={props.mapCenter}
        zoom={props.mapZoom}
        disableDefaultUI={true}
        styles={props.darkMode ? maptheme.Dark : maptheme.Light}
      >
      </Map>   
    );
}

export default GoogleApiWrapper(
    { apiKey: process.env.REACT_APP_GOOGLEMAP_APIKEY }
)(View);

// balashankar 
// mathan
//  