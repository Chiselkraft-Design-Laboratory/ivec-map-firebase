import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as UI from './UI';
import { AppBar, Toolbar, Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  push: {
    flexGrow: 1 
  },
  appbar: {
    backgroundColor: 'transparent',
    paddingTop: theme.spacing(3),
  },
  zoomgrid: {
    height: '100vh',
    paddingBottom: theme.spacing(3)
  }
});

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
    const { classes } = this.props;
    return (
      <React.Fragment>

        <CssBaseline />

        <AppBar
          variant="elevation"
          position="fixed"
          component="nav"
          elevation={0}
          className={classes.appbar}>
          
          <Toolbar>
            <UI.Brand size={32} color="#ffffff" />
            <div className={classes.push}/>
            <UI.Commandbar size="small"/>
          </Toolbar>
        </AppBar>

        <Grid component="footer" 
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
          className={classes.zoomgrid}>          
          <UI.ZoomControl />
        </Grid>

      </React.Fragment>
    );
  }
}

export default withFirebase(withStyles(styles)(IvecConsole));
