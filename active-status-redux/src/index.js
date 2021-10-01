// react imports
import React from 'react';
import ReactDOM from 'react-dom';

// app component import
import App from './App';

// store imports
import { Provider } from 'react-redux';
import store from './store/store';

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
