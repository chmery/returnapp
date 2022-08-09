import React from "react";

const ExpensesContext = React.createContext({
    expenses: [],
    managedExpense: null,
    onCloseManager: () => {},
    onManage: () => {},
    onCreate: () => {},
    onRemove: () => {},
});

export default ExpensesContext;
