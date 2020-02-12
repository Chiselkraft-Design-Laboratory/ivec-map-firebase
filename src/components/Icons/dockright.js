
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let DockRightIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" color={props.color} fontSize={props.size} >
  <path d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 5h9v14H5V5z" fill="#626262"/>
  <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
  </SvgIcon>
);
DockRightIcon = pure(DockRightIcon);
DockRightIcon.displayName = 'DockRightIcon';
DockRightIcon.muiName = 'SvgIcon';

export default DockRightIcon;