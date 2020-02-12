
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let MinusIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" color={props.color} fontSize={props.size} >
    <path d="M5 11h14v2H5z" fill="#626262"/>
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
  </SvgIcon>
);

MinusIcon = pure(MinusIcon);
MinusIcon.displayName = 'MinusIcon';
MinusIcon.muiName = 'SvgIcon';

export default MinusIcon;