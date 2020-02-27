import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const dark = createMuiTheme({
  palette: {
    type: "dark"
  }
});
const light = createMuiTheme({
  palette: {
    type: "light"
  }
});

const CrayonUI = props => {
  return (
    <ThemeProvider theme={props.dark ? dark : light}>
      {props.children}
    </ThemeProvider>
  );
};

export default CrayonUI;
