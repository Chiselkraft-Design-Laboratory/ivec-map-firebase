import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

import { withIvecData } from "./IvecData";
import CrayonUI from "./CrayonUI";

class IvecConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: true
    };
  }
  componentDidMount() {
    this.props.firebase.devices().on("value", snapshot => {
      console.log(snapshot.val());
    });
  }
  render() {
    console.log(this.props.dummies.Cities);
    console.log(this.props.dummies.ChargeStations);
    console.log(this.props.dummies.ServiceStations);
    console.log(this.props.dummies.Fleet);

    return (
      <React.Fragment>
        <CrayonUI dark={this.state.darkmode}>
          <CssBaseline />
        </CrayonUI>
      </React.Fragment>
    );
  }
}

export default withIvecData(IvecConsole);
