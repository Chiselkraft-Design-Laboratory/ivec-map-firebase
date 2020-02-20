
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let MinusIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" fontSize={props.size} >
    <path fill={props.fill || '#616161'} d="M5 11h14v2H5z"/>
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
  </SvgIcon>
);

MinusIcon = pure(MinusIcon);
MinusIcon.displayName = 'MinusIcon';
MinusIcon.muiName = 'SvgIcon';

export default MinusIcon;