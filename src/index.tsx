import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore  } from 'redux';

import Router from './components/Router'
import './index.css'
import reducer from './reducers/Reducers'

const store = createStore (reducer);

ReactDOM.render(
  <Provider store={store} >
    <Router />
  </Provider>,
  document.getElementById('root') as HTMLElement
);