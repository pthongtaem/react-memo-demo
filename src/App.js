import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Tower from './Tower';

const App = () => {
  return (
    <Provider store={store}>
      <Tower />
    </Provider>
  );
};

export default App;
