import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

import { OmniZoomControl } from "./Omnibox";
import { withIvecData } from "./IvecData";
import CrayonUI from "./CrayonUI";

class IvecConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: true
    };
  }
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <CrayonUI dark={this.state.darkmode}>
          <CssBaseline />
          <OmniZoomControl />
        </CrayonUI>
      </React.Fragment>
    );
  }
}

export default withIvecData(IvecConsole);
