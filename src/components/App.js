import React, { Component } from "react";
import { CssBaseline, Grid, withStyles } from "@material-ui/core";

import { OmniZoomControl, OmniSearchBar, OmniPinControl } from "./Omnibox";
import { withIvecData } from "./IvecData";
import CrayonUI from "./CrayonUI";

const style = theme => ({
  root: {
    width: 392,
    position: "fixed",
    margin: theme.spacing(2.5, 0, 0, 2.5),
    left: 0,
    top: 0,
    display: "flex",
    flexWrap: "wrap",
    "& >:not(:first-child)": {
      marginTop: theme.spacing(2)
    }
  }
});

class IvecConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: false
    };
  }
  componentDidMount() {}
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CrayonUI dark={this.state.darkmode}>
          <CssBaseline />
          <OmniZoomControl />
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <OmniSearchBar />
            </Grid>
            <Grid item xs={12}>
              <OmniPinControl />
            </Grid>
          </Grid>
        </CrayonUI>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(withIvecData(IvecConsole));
