import React, { Component } from 'react';
import { AppBar, Toolbar, Grid, withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withFirebase } from './Firebase';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import * as UI from './UI';



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
const zoomLimit = { min: 6, max: 18 };



class IvecConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlDock: 'left',

      panelDock: 'right',
      panelPinned: true,
      panelOpen: false,
      panelSize: 340,
      
      mapZoom: 12,
      mapCenter: { lat: 28.57817, lng: 77.20983 },
      
      showFleet: true,
      showChargeStations: false,
      showServiceStations: false,
      showSearch: false,      
    };
    this.toggleFleet = this.toggleFleet.bind(this);
    this.toggleChargeStations = this.toggleChargeStations.bind(this);
    this.toggleServiceStations = this.toggleServiceStations.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleFitExtent = this.handleFitExtent.bind(this);
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handlePinPanel = this.handlePinPanel.bind(this);
  }

  componentDidMount() { }
  componentWillUnmount() { }
  
  // map marker toggle
  toggleFleet() {
      this.setState(prevState => ({ showFleet: !prevState.showFleet })); 
  }
  toggleChargeStations() {
      this.setState(prevState => ({ showChargeStations: !prevState.showChargeStations })); 
  }
  toggleServiceStations() {
      this.setState(prevState => ({ showServiceStations: !prevState.showServiceStations })); 
  }

  // search toggle
  toggleSearch() {
      this.setState(prevState => ({ showSearch: !prevState.showSearch })); 
  }

  // zoom functions
  handleFitExtent() { }
  handleZoomIn() {
    if (this.state.mapZoom < zoomLimit.max) {
      this.setState(prevState => ({ mapZoom: prevState.mapZoom + 1 }));
    }
  }
  handleZoomOut() {
    if (this.state.mapZoom > zoomLimit.min) {
      this.setState(prevState => ({ mapZoom: prevState.mapZoom - 1 }));
    }
  }

  // Panel functions
  handlePinPanel() { }


  
  render() {

    const { classes } = this.props;
    console.log(this.state);
    
    return (
      <React.Fragment>
        <CssBaseline />

        <AppBar
          variant="elevation"
          position="fixed"
          component="nav"
          elevation={0}
          className={classes.appbar}
        >
          <Toolbar>
            {this.state.dockControl==='right' ? <div className={classes.push} /> : null}
            <UI.Commandbar
            showFleet={this.state.showFleet}
            showChargeStations={this.state.showChargeStations}
            showServiceStations={this.state.showServiceStations}
            toggleFleet={this.toggleFleet}
            toggleChargeStations={this.toggleChargeStations}
            toggleServiceStations={this.toggleServiceStations}
            toggleSearch={this.toggleSearch} />
          </Toolbar>
        </AppBar>
                
        <Grid component="section" >
          <Map
            google={this.props.google}
            initialCenter={this.state.mapCenter}
            zoom={this.state.mapZoom}
            disableDefaultUI={true}
          >
          </Map>
        </Grid>
       
        <Grid component="footer" 
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
          className={classes.zoomgrid}
        >
            <UI.ZoomControl
              onFitExtent={this.handleFitExtent}
              onZoomIn={this.handleZoomIn}
              onZoomOut={this.handleZoomOut} 
            />
        </Grid>
        
        <UI.DataView
          open={this.state.panelOpen}
          dock={this.state.panelDock}
          size={this.state.panelSize}
        />
        
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper(
  { apiKey: process.env.REACT_APP_GOOGLEMAP_APIKEY }
)(withFirebase(withStyles(styles)(IvecConsole)));
