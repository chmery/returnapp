import React from "react";

const ExpensesContext = React.createContext({
    expenses: [],
    onCreate: () => {},
    onRemove: () => {},
});

export default ExpensesContext;
