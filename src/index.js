import React from 'react';
import ReactDOM from 'react-dom';
import IvecConsole from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<IvecConsole />, document.getElementById('root'));
serviceWorker.unregister();
