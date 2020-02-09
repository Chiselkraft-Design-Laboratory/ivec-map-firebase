
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let DockLeftIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" color={props.color} fontSize={props.size} >
    <path d="M21 19V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zm-11 0V5h9l.002 14H10z" fill="#626262"/>
  <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
  </SvgIcon>
);
DockLeftIcon = pure(DockLeftIcon);
DockLeftIcon.displayName = 'DockLeftIcon';
DockLeftIcon.muiName = 'SvgIcon';

export default DockLeftIcon;