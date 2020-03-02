import React from "react";
import pure from "recompose/pure";

let ZoomInIcon = props => (
  <svg
    version="1.1"
    id="zoomplus-icon"
    viewBox="0 0 24 24"
    x="0"
    y="0"
    preserveAspectRatio="xMidYMid meet"
    width={props.size || 24}
    height={props.size || 24}
  >
    <path
      fill={props.color || "#616161"}
      d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"
    />
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
  </svg>
);
ZoomInIcon = pure(ZoomInIcon);
ZoomInIcon.displayName = "ZoomInIcon";
ZoomInIcon.muiName = "SvgIcon";

export default ZoomInIcon;
