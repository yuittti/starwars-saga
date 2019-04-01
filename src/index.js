import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';

import './index.css';
import App from './components/App.js';
import AppContainer from './container';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root')
);
