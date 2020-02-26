import React from "react";
import ReactDOM from "react-dom";
import Firebase, { IvecDataContext } from "./components/IvecData";
import IvecConsole from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <IvecDataContext.Provider value={new Firebase()}>
    <IvecConsole />
  </IvecDataContext.Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
