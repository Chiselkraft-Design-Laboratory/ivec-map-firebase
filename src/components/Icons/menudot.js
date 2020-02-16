
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let DotMenuIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" fontSize={props.size} >
   <path fill={props.fill || '#616161'} d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
  </SvgIcon>
);
DotMenuIcon = pure(DotMenuIcon);
DotMenuIcon.displayName = 'DotMenuIcon';
DotMenuIcon.muiName = 'SvgIcon';

export default DotMenuIcon;