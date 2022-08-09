import ExpensesContext from "./expenses-context";
import { useState } from "react";

const ExpensesProvider = (props) => {
    const [expensesData, setExpensesData] = useState([]);

    const onCreateExpenseHandler = (expenseData) => {
        setExpensesData((prevExpensesData) => {
            return [...prevExpensesData, expenseData];
        });
    };

    const onRemoveExpenseHandler = (id) => {
        const updatedExpensesData = [...expensesData].filter((personData) => personData.id !== id);
        console.log(updatedExpensesData);
    };

    const expensesContext = {
        expenses: expensesData,
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
