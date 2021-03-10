import React from 'react';
import ReactDOM from 'react-dom';

import { StateProvider } from './store/StateProvider';
import reducer, { initialState } from './store/Reducer';
import App from './App';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
