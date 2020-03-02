import React from "react";
import pure from "recompose/pure";

let ZoomOutIcon = props => (
  <svg
    version="1.1"
    id="zoomout-icon"
    viewBox="0 0 24 24"
    x="0"
    y="0"
    preserveAspectRatio="xMidYMid meet"
    width={props.size || 24}
    height={props.size || 24}
  >
    <path fill={props.color || "#616161"} d="M5 11h14v2H5z" />
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
  </svg>
);
ZoomOutIcon = pure(ZoomOutIcon);
ZoomOutIcon.displayName = "ZoomOutIcon";
ZoomOutIcon.muiName = "SvgIcon";

export default ZoomOutIcon;
