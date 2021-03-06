
import React from 'react';
import pure from 'recompose/pure'
import SvgIcon from '@material-ui/core/SvgIcon';

let PlusIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" fontSize={props.size} >
  <path fill={props.fill || '#616161'} d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
  <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
  </SvgIcon>
);
PlusIcon = pure(PlusIcon);
PlusIcon.displayName = 'PlusIcon';
PlusIcon.muiName = 'SvgIcon';

export default PlusIcon;