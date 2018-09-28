import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store";
import rootReducer from "./reducers/RootReducer";
import rootSaga from "./sagas";
import "./index.css";
const store = configureStore(rootReducer, rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
