import React from "react";
import pure from "recompose/pure";

let ScooterIcon = props => (
  <svg
    version="1.1"
    id="fleet-icon"
    viewBox="0 0 512 512"
    x="0"
    y="0"
    preserveAspectRatio="xMidYMid meet"
    width={props.size || 24}
    height={props.size || 24}
  >
    <path
      fill={props.color || "#616161"}
      d="M431 353.39c-18.64 0-33.8 15.16-33.8 33.81 0 18.64 15.16 33.8 33.8 33.8s33.8-15.16 33.8-33.8-15.16-33.81-33.8-33.81zm0 50.87c-9.41 0-17.06-7.65-17.06-17.06s7.65-17.06 17.06-17.06c9.41 0 17.06 7.65 17.06 17.06 0 9.4-7.65 17.06-17.06 17.06z"
    />
    <path
      fill={props.color || "#616161"}
      d="M510.06 321.37c-19.63-23.54-48.45-37.04-79.05-37.04-5.13 0-10.17.38-15.1 1.11-3.4-22.03-31.12-81.19-51.2-105.05v-70.91c0-2.61-1.22-5.08-3.3-6.66s-4.78-2.1-7.3-1.41l-13.64 3.76c-7.28 2.01-13.65 5.98-18.58 11.23l-7.17-32.96c-.84-3.85-4.24-6.59-8.18-6.59h-14.61V64.8c0-4.62-3.75-8.37-8.37-8.37s-8.37 3.75-8.37 8.37v42.14c0 4.62 3.75 8.37 8.37 8.37s8.37-3.75 8.37-8.37V93.6h7.87l10.31 47.43c-4.41 4.66-7.4 10.43-8.65 16.79l-24.09 26.48c-3.11 3.42-2.86 8.71.56 11.82 1.6 1.46 3.62 2.18 5.63 2.18 2.27 0 4.54-.92 6.19-2.74l14.54-15.99c1.06 2.13 2.34 4.17 3.85 6.08 9.48 11.98 29.6 60.31 38.25 79.58 9.33 20.79 11.54 38.07 6.55 51.35-7.27 19.39-28.56 34.31-56.93 39.91-30.29 5.98-60.3-.4-74.65-15.86-6.32-6.81-9.16-13.57-8.66-20.67.89-12.62 12.1-27.77 33.34-45.03.03-.02 1.74-1.94 1.76-1.97 6.56-9.44 7.38-21.6 2.11-31.84-5.33-10.37-15.89-16.8-27.55-16.8H101.58c-23.1 0-42.1 17.85-43.96 40.48-4.81 4.89-16.04 16.87-27.37 32.98C10.18 326.34 0 352.98 0 376.98c0 4.62 3.75 8.37 8.37 8.37h28.65c-.02.61-.04 1.23-.04 1.84 0 37.71 30.68 68.38 68.38 68.38 31.73 0 58.47-21.72 66.16-51.07h193.33c7.69 29.35 34.43 51.07 66.16 51.07 37.71 0 68.38-30.68 68.38-68.38 0-13.82-4.13-26.68-11.21-37.45l20.67-16.46c1.76-1.4 2.88-3.46 3.11-5.7.22-2.24-.46-4.48-1.9-6.21zm-336.27-80.3h48.56c5.44 0 10.17 2.89 12.66 7.72 1.87 3.63 2.11 7.64.78 11.29h-62.01v-19.01zm-72.21 0h55.47v19.01H75.51c3.54-11.02 13.89-19.01 26.07-19.01zm3.78 197.76c-28.47 0-51.64-23.17-51.64-51.64 0-.62.02-1.23.04-1.84H71.6c-.03.61-.05 1.23-.05 1.84 0 18.64 15.16 33.81 33.8 33.81 18.64 0 33.81-15.16 33.81-33.81 0-.62-.02-1.23-.05-1.84h17.85c.02.61.04 1.23.04 1.84 0 28.48-23.17 51.64-51.64 51.64zm-17.07-51.64c0-.62.04-1.24.1-1.84h33.92c.07.61.1 1.22.1 1.84 0 9.41-7.65 17.06-17.06 17.06-9.4.01-17.06-7.65-17.06-17.06zm72-18.58H37.31c2.77-8 7.89-19.76 16.72-31.08 20.21-25.93 49.77-37.72 87.83-35.04 16.87 1.19 27.47 5.63 31.51 13.21 5.26 9.91.86 27.7-13.08 52.91zm167.87 19.15H173.73c0-.19.01-.38.01-.57 0-2.54-.15-5.07-.43-7.57 12.96-22.74 25.87-51.04 14.82-71.79-6.92-13.01-22.1-20.43-45.11-22.05-55.16-3.88-86.27 20.72-102.67 42.05-12.13 15.77-18.06 31.92-20.64 40.78h-2.48c4.77-40.84 42.3-81.76 52.06-91.79H219c-14.51 14.82-22.08 28.66-23.01 41.98-.83 11.8 3.58 22.99 13.09 33.23 18.44 19.86 53.83 28.06 90.16 20.89 11.78-2.32 22.58-6.09 32.06-11.06-2.06 8.11-3.16 16.59-3.16 25.33.01.19.02.38.02.57zm16.75-266.44l3.05-.84v40.94c-8.61-9.34-15.91-16.69-20.04-20.75 1.3-9.13 7.91-16.85 16.99-19.35zm-23.65 53.94c-2.91-3.67-4.19-8.26-3.61-12.92.28-2.23.97-4.34 2.01-6.25 24.3 24.46 77.44 106.07 79.87 133.18-9.83 3.17-19.01 7.77-27.31 13.57.48-21.82-16.07-83.5-50.96-127.58zM431 438.83c-28.47 0-51.64-23.17-51.64-51.64s23.17-51.64 51.64-51.64 51.64 23.17 51.64 51.64c0 28.48-23.16 51.64-51.64 51.64zm46.35-101.86c-12.19-11.26-28.48-18.16-46.34-18.16-37.71 0-68.38 30.68-68.38 68.38 0 .19.01.38.01.57H344.9c0-.19-.01-.38-.01-.57 0-47.48 38.63-86.12 86.12-86.12 22.75 0 44.32 8.91 60.38 24.71l-14.04 11.19z"
    />

    <path fill="rgba(0, 0, 0, 0)" d="M0 0h512v512H0z" />
  </svg>
);
ScooterIcon = pure(ScooterIcon);
ScooterIcon.displayName = "ScooterIcon";
ScooterIcon.muiName = "SvgIcon";

export default ScooterIcon;