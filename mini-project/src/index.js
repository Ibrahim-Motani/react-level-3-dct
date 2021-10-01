import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
store.subscribe(() => {
  console.log("state updated", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
