import React from 'react';
import { Marker } from 'google-maps-react';

const Plot = (props) => {
  return (
    // props.markers.map((point) => (
    <Marker
      name={props.name}
      title={props.title}
      position={props.pos}
    />
    // ))
  )
};

export default Plot;