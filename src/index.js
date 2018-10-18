import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import 'tachyons';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchingStaffs } from './reducers/reducers';

import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const store = createStore(
  searchingStaffs,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Particles className="particles" params={particlesOptions} />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
