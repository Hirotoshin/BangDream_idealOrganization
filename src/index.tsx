import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import App from "./App";
import "./index.css";
import { rootReducer } from "./reducer/index";
import registerServiceWorker from "./registerServiceWorker";

const persistConfig = {
  key: "root", // Storageに保存されるキー名を指定する
  storage // 保存先としてlocalStorageがここで設定される
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
