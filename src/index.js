import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import ExpensesProvider from "./store/ExpensesProvider";

const root = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <ExpensesProvider>
            <App />
        </ExpensesProvider>
    </React.StrictMode>,
    root
);
