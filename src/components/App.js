import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import * as UI from './UI';

class IvecConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    this.props.firebase.devices().on('value', snap => {
      console.log(snap.val())
    })
  }
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid item>
            {/* <UI.Brand /> */}
            {/* <UI.Commandbar /> */}
            {/* <UI.ZoomControl /> */}
            <UI.DataView open= {true} options={{Dock: "right"}}/>
            
        </Grid>
      </Grid>
      </React.Fragment>
    );
  }
}

export default withFirebase(IvecConsole);
