import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import App from "./App";
import "./index.css";
import MemberReducer from "./reducer/MemberReducer";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(MemberReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
