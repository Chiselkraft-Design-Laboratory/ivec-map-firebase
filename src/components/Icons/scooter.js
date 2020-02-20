
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let BikeIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" fontSize={props.size} >
   <path fill={props.fill || '#616161'} d="M12 16.17c-1.29 0-2.35 1.05-2.35 2.35v3.13c0 1.3 1.06 2.35 2.35 2.35s2.35-1.05 2.35-2.35v-3.13c0-1.29-1.06-2.35-2.35-2.35z"/>
  <path fill={props.fill || '#616161'} d="M19.83 3.13h-3.99C15.47 1.35 13.89 0 12 0S8.53 1.35 8.17 3.13h-4c-.43 0-.78.35-.78.78 0 .43.35.78.78.78h3.99c.17.83.61 1.56 1.21 2.11-2.54 1.07-4.33 3.58-4.33 6.5v5.65c0 1.06.86 1.91 1.91 1.91h1.13v-2.35c0-2.16 1.76-3.91 3.91-3.91 2.16 0 3.91 1.76 3.91 3.91v2.35h1.22c1.06 0 1.91-.86 1.91-1.91V13.3c0-2.94-1.82-5.47-4.4-6.52.59-.55 1.02-1.27 1.19-2.09h3.99c.43 0 .78-.35.78-.78s-.33-.78-.76-.78zM12 6.26c-1.29 0-2.35-1.05-2.35-2.35 0-1.29 1.05-2.35 2.35-2.35 1.29 0 2.35 1.05 2.35 2.35S13.29 6.26 12 6.26z"/>
  </SvgIcon>
);
BikeIcon = pure(BikeIcon);
BikeIcon.displayName = 'BikeIcon';
BikeIcon.muiName = 'SvgIcon';

export default BikeIcon;