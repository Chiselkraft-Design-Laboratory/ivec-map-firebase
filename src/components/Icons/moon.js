
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let MoonIcon = (props) => (
  <SvgIcon viewBox="0 0 512 512" fontSize={props.size} >
    <path fill={props.fill || '#616161'} d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"/>
  <path fill="rgba(0, 0, 0, 0)" d="M0 0h512v512H0z"/>
  </SvgIcon>
);
MoonIcon = pure(MoonIcon);
MoonIcon.displayName = 'MoonIcon';
MoonIcon.muiName = 'SvgIcon';

export default MoonIcon;