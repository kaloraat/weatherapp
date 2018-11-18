import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise'
import App from "./components/App";
import './styles/main.css'
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from "./serviceWorker";

import reducers from "./reducers";

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(ReduxPromise))(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
