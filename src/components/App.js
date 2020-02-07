import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as UI from './UI';
import * as Dummies from './Dummies';

class IvecConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fleet: Dummies.Fleet,
      ChargeStations: Dummies.ChargeStations,
      ServiceStations: Dummies.ServiceStations,
      Cities: Dummies.Cities,

      showFleet: false,
      showChargeStations: false,
      showServiceStations: false,
      currentCity: "Delhi",

    };
    // bind functions
    this.toggleFleet = this.toggleFleet.bind(this);
    this.toggleChargeStations = this.toggleChargeStations.bind(this);
    this.toggleServiceStations = this.toggleServiceStations.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
  }

  componentDidMount() {
  }
  componentWillUnmount(){}

  toggleFleet() {this.setState(prevState => ({ showFleet: !prevState.showFleet }));}
  toggleChargeStations() {this.setState(prevState => ({ showChargeStations: !prevState.showChargeStations }));}
  toggleServiceStations() {this.setState(prevState => ({ showServiceStations: !prevState.showServiceStations }));}
  
  onChangeCity(event, index) {
  }
  
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <CssBaseline />
        <UI.NavBar
          // props
          listCities={Object.keys(this.state.Cities)}
          showFleet={this.state.showFleet}
          showChargeStations={this.state.showChargeStations}
          showServiceStations={this.state.showServiceStations}
          currentCity={this.state.currentCity}
          // events & functions
          onChangeCity={this.onChangeCity}
          toggleFleet={this.toggleFleet}
          toggleChargeStations={this.toggleChargeStations}
          toggleServiceStations={this.toggleServiceStations}
        />
      </React.Fragment>
    );
  }
}

export default withFirebase(IvecConsole);
