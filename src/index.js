import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./css/globals.css";
import "./css/typography.css";
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
