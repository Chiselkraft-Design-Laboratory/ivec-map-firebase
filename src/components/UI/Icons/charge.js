
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let ZoomIcon = (props) => (
<SvgIcon viewBox="0 0 512 512" color={props.color} fontSize={props.size} >
<path fill="#626262" d="M469.27 120.15l.28-.28-90.61-90.61c-8.34-8.24-21.76-8.24-30.11 0-8.24 8.24-8.24 21.87 0 30.11l44.88 44.88c-29.82 11.36-49.99 41.75-44.88 76.97 4.54 31.24 31.24 56.52 62.49 59.93 13.35 1.42 24.99-.85 36.07-5.68v204.79c0 15.62-12.78 28.4-28.4 28.4s-28.4-12.78-28.4-28.4V312.44c0-31.24-25.56-56.81-56.81-56.81h-28.4V56.81C305.38 25.56 279.82 0 248.57 0H78.15c-31.24 0-56.8 25.56-56.8 56.81v426.05c0 15.62 12.78 28.4 28.4 28.4h227.23c15.62 0 28.4-12.78 28.4-28.4V298.23h42.6v138.04c0 37.21 26.7 71.01 63.62 74.7 39 4.08 73.93-24.23 78.01-63.24.26-2.49.39-4.99.38-7.49V170.42c.01-19.6-7.94-37.49-20.72-50.27zm-50.28 78.67c-15.62 0-28.4-12.78-28.4-28.4s12.78-28.4 28.4-28.4 28.4 12.78 28.4 28.4-12.78 28.4-28.4 28.4zM134.96 372.65v-74.42h-33.23c-7.84.02-14.22-6.32-14.24-14.16-.01-2.4.59-4.75 1.74-6.86l75.84-142.02c6.82-12.78 26.7-7.95 26.7 6.82v85.21h32.38c7.84.05 14.16 6.44 14.12 14.29-.01 2.46-.67 4.88-1.9 7.02l-74.98 131.22c-7.12 12.5-26.43 7.39-26.43-7.1z"/>
</SvgIcon>
);

ZoomIcon = pure(ZoomIcon);
ZoomIcon.displayName = 'ZoomIcon';
ZoomIcon.muiName = 'SvgIcon';

export default ZoomIcon;