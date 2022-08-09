import ExpensesContext from "./expenses-context";
import { useState } from "react";

const ExpensesProvider = (props) => {
    const [expensesData, setExpensesData] = useState([]);
    const [managedExpense, setManagedExpense] = useState(null);

    const onCreateExpenseHandler = (expenseData) => {
        setExpensesData((prevExpensesData) => {
            return [...prevExpensesData, expenseData];
        });
    };

    const onRemoveExpenseHandler = (id) => {
        const updatedExpensesData = [...expensesData].filter((personData) => personData.id !== id);
        setExpensesData(updatedExpensesData);
    };

    const onManageExpenseHandler = (id) => {
        const managedExpenseIndex = expensesData.findIndex((expense) => expense.id === id);
        const managedExpense = expensesData[managedExpenseIndex];

        setManagedExpense(managedExpense);
    };

    const onCloseManagerHandler = () => {
        setManagedExpense(null);
    };

    const expensesContext = {
        expenses: expensesData,
        managedExpense: managedExpense,
        onCloseManager: onCloseManagerHandler,
        onManage: onManageExpenseHandler,
        onCreate: onCreateExpenseHandler,
        onRemove: onRemoveExpenseHandler,
    };

    return (
        <ExpensesContext.Provider value={expensesContext}>
            {props.children}
        </ExpensesContext.Provider>
    );
};

export default ExpensesProvider;
