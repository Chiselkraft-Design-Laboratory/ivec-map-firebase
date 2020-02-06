import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';

import IvecConsole from './components/App';
    
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <IvecConsole />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
