import { useContext } from "react";
import ExpensesContext from "../../store/expenses-context";
import Button from "../UI/Buttons/Button";
import { LeftIcon } from "../UI/Icons";

import classes from "./ExpenseManager.module.css";
import ManagedExpense from "./ManagedExpense";
import PeopleList from "./PeopleList";

const ExpenseManager = () => {
    const expensesContext = useContext(ExpensesContext);
    const { managedExpense, setManagedExpense, onRemove, onCloseManager } = expensesContext;

    const removeManagedExpenseHandler = (id) => {
        onRemove(id);
    };

    const checkPersonHandler = (id, returnAmount) => {
        const updatedManagedExpense = { ...managedExpense };

        updatedManagedExpense.people.forEach((personData) => {
            if (personData.id === id && personData.hasReturned) {
                personData.hasReturned = false;
                updatedManagedExpense.amountReturned -= returnAmount;
                return;
            }

            if (personData.id === id) {
                personData.hasReturned = true;
                updatedManagedExpense.amountReturned += returnAmount;
            }
        });

        setManagedExpense(updatedManagedExpense);
    };

    return (
        <div className={classes["expense-manager"]}>
            <h1>Expense Manager</h1>
            <ManagedExpense expenseData={managedExpense} onRemove={removeManagedExpenseHandler} />
            <PeopleList managedExpense={managedExpense} onCheckPerson={checkPersonHandler} />
            <Button onClick={onCloseManager}>
                <LeftIcon /> Go back
            </Button>
        </div>
    );
};

export default ExpenseManager;
