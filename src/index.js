import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ExpensesProvider from "./store/ExpensesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ExpensesProvider>
        <App />
    </ExpensesProvider>
);
