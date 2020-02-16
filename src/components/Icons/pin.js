
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let PinIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" fontSize={props.size} >
   <path fill={props.fill || '#616161'} d="M19 17c0-2.038-1.188-3.836-3-4.92V5h.5a1.5 1.5 0 000-3h-9a1.5 1.5 0 000 3H8v7.08C6.188 13.164 5 14.962 5 17h6v4c0 .55.45 1 1 1s1-.45 1-1v-4h6z"/>
  <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
  </SvgIcon>
);
PinIcon = pure(PinIcon);
PinIcon.displayName = 'PinIcon';
PinIcon.muiName = 'SvgIcon';

export default PinIcon;