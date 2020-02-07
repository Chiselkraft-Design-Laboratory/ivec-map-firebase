import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as UI from './UI';
import * as Dummies from './Dummies';
import * as MapTheme from './MapTheme';

class IvecConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fleet: Dummies.Fleet,
      ChargeStations: Dummies.ChargeStations,
      ServiceStations: Dummies.ServiceStations,
      Cities: Dummies.Cities,

      showFleet: true,
      showChargeStations: false,
      showServiceStations: false,
      currentCity: "Delhi",

      mapCenter: { lat: 28.57817, lng: 77.20983 },
      mapZoom: 12,
      mapbounds: {},
      showZoomControl: true,
      
      UItheme: 'dark'
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
  
  asLatLng(l) {
    return { lat: l[0], lng: l[1] };
  }
  
  plotMarkers = (obj, icon) => {
    const newplot = Object.keys(obj).map(st => {
      return(
        <Marker 
          key={st} 
          icon={icon} 
          name={st} title={obj[st].vendor} 
          position={{ lat: obj[st].l[0], lng: obj[st].l[1] }} 
        />
        );
    });
    return newplot;
  }
  
  render() {
    const FleetIcon = {
      url: 'mfleet.png',
      anchor: new this.props.google.maps.Point(0,0),
      size: new this.props.google.maps.Size(64,64),
      scaledSize: new this.props.google.maps.Size(48,48)
    };
    const ChargeIcon = {
      url: 'mcharge.png',
      anchor: new this.props.google.maps.Point(0,0),
      size: new this.props.google.maps.Size(64,64),
      scaledSize: new this.props.google.maps.Size(48,48)
    };
    const ServiceIcon = {
      url: 'mservice.png',
      anchor: new this.props.google.maps.Point(0,0),
      size: new this.props.google.maps.Size(64,64),
      scaledSize: new this.props.google.maps.Size(48,48)
    };
    
  console.log(this.state);
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
        <Map
          google={this.props.google}
          initialCenter={this.state.mapCenter}
          zoom={this.state.mapZoom}
        
          styles={this.state.UItheme === 'dark' ? MapTheme.Dark : MapTheme.Light}
        
          mapTypeControl={false}
          fullscreenControl={false}
          streetViewControl={false}          
        >
          
          {this.state.showFleet ? this.plotMarkers(this.state.Fleet, FleetIcon) : null}
          {this.state.showChargeStations ? this.plotMarkers(this.state.ChargeStations, ChargeIcon) : null}
          {this.state.showServiceStations ? this.plotMarkers(this.state.ServiceStations, ServiceIcon) : null}

        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAP_APIKEY,
})(IvecConsole);
