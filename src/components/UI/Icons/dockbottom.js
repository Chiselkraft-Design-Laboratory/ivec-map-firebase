
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let DockBottomIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" color={props.color} fontSize={props.size} >
   <path d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 5l.001 9H5V5h14z" fill="#626262"/>
  <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
  </SvgIcon>
);
DockBottomIcon = pure(DockBottomIcon);
DockBottomIcon.displayName = 'DockBottomIcon';
DockBottomIcon.muiName = 'SvgIcon';

export default DockBottomIcon;