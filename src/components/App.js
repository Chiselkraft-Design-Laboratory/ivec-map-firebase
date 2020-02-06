import React, { Component } from 'react';
import { withFirebase } from './Firebase';


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
    return null;
  }
}

export default withFirebase(IvecConsole);
