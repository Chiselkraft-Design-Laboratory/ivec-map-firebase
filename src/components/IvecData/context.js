import React from "react";
import * as Dummies from "./Dummies";
const IvecDataContext = React.createContext(null);

export const withIvecData = Component => props => (
  <IvecDataContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} dummies={Dummies} />}
  </IvecDataContext.Consumer>
);
export default IvecDataContext;
