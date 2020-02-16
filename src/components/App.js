import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import * as UI from './UI';
import * as IvecMap from './IvecMap';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';



const zoomLimit = { min: 6, max: 18 };



class IvecConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,

      controlDock: 'left',

      panelDock: 'right',
      panelPinned: true,
      panelOpen: false,
      panelSize: 340,
      
      mapZoom: 13,
      mapCenter: { lat: 28.57817, lng: 77.20983 },
      
      showFleet: true,
      showChargeStations: false,
      showServiceStations: false,
      showSearch: false,      
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
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
  // toggle darkmode
  toggleDarkMode() {
    this.setState(prevState => ({ 
      darkMode: !prevState.darkMode
     })); 
  }
  // map marker toggle
  toggleFleet() {
    this.setState(prevState => ({
      showFleet: !prevState.showFleet
    })); 
  }
  toggleChargeStations() {
    this.setState(prevState => ({
      showChargeStations: !prevState.showChargeStations
    })); 
  }
  toggleServiceStations() {
    this.setState(prevState => ({
      showServiceStations: !prevState.showServiceStations
    })); 
  }

  // search toggle
  toggleSearch() {
    this.setState(prevState => ({
      showSearch: !prevState.showSearch
    })); 
  }

  // zoom functions
  handleFitExtent() { this.toggleDarkMode(); }
  handleZoomIn() {
    if (this.state.mapZoom < zoomLimit.max) {
      this.setState(prevState => ({
        mapZoom: prevState.mapZoom + 1
      }));
    }
  }
  handleZoomOut() {
    if (this.state.mapZoom > zoomLimit.min) {
      this.setState(prevState => ({
        mapZoom: prevState.mapZoom - 1
      }));
    }
  }

  // Panel functions
  handlePinPanel() { }


  
  render() {
    console.log(this.state);
    
    return (
        <UI.Theme darkmode={this.state.darkMode}>
        <CssBaseline />

        <UI.Commandbar
          dock={this.state.controlDock}
          showFleet={this.state.showFleet}
          showChargeStations={this.state.showChargeStations}
          showServiceStations={this.state.showServiceStations}
          showSearch={this.state.showSearch}
          toggleFleet={this.toggleFleet}
          toggleChargeStations={this.toggleChargeStations}
          toggleServiceStations={this.toggleServiceStations}
          toggleSearch={this.toggleSearch}
        />

        
        <Grid component="section" >
          <IvecMap.View
            mapCenter={this.state.mapCenter}
            mapZoom={this.state.mapZoom}
            darkMode={this.state.darkMode}
          />
        </Grid>
       
        <UI.ZoomControl
          onFitExtent={this.handleFitExtent}
          onZoomIn={this.handleZoomIn}
          onZoomOut={this.handleZoomOut} 
        />

        <UI.DataView
          darkMode={this.state.darkMode}
          open={this.state.panelOpen}
          dock={this.state.panelDock}
          size={this.state.panelSize}
        />
      </UI.Theme>
    );
  }
}

export default withFirebase(IvecConsole);
