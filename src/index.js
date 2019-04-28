import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import AppReducer from './reducers/index';
import { Provider } from 'react-redux';
import App from './containers/App';

import './variables.css';
import 'normalize.css';
import './icons.css';
import './index.css';

const store = createStore(AppReducer)

ReactDOM.render(
<Provider store={ store }>
  <App />
</Provider>,
document.getElementById('root')
);

serviceWorker.unregister();
