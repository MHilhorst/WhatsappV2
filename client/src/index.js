import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
