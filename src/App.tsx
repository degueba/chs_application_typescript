import React from 'react';

import List from './List'; 
import Routes from './routes';


import { Provider } from 'react-redux';

import store from './store';

// Styles scss
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
