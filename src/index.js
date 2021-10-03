import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter from react-router-dom

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './redux/reducers';

import { Provider } from "react-redux";

// Redux Store
const store = configureStore({
    reducer:rootReducer,
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
