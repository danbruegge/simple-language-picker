import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Translations from './Translations';
import translations from './Translations/ducks';
import App from './App';

const store = createStore(combineReducers({ translations }));

ReactDOM.render(
    <Provider store={store}>
        <Translations>
            <App />
        </Translations>
    </Provider>,
    document.getElementById('root'),
);
