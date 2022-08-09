import { useContext, useState } from "react";
import ExpensesContext from "../../store/expenses-context";
import DarkCard from "../UI/Cards/DarkCard";
import Button from "../UI/Buttons/Button";
import LeftIcon from "../UI/Buttons/LeftIcon";

import classes from "./ExpenseManager.module.css";
import ManagedExpense from "./ManagedExpense";
import PeopleItem from "./PeopleItem";

const ExpenseManager = (props) => {
    const expensesContext = useContext(ExpensesContext);
    const { managedExpense, setManagedExpense, onRemove, onCloseManager } = expensesContext;

    const removeManagedExpenseHandler = (id) => {
        onRemove(id);
        onCloseManager();
    };

    const checkPersonHandler = (id) => {
        const updatedManagedExpense = { ...managedExpense };

        updatedManagedExpense.people.forEach((personData) => {
            if (personData.id === id) personData.hasReturned = !personData.hasReturned;
        });

        setManagedExpense(updatedManagedExpense);
    };

    const peopleList = managedExpense.people.map((personData) => (
        <PeopleItem
            key={personData.id}
            personData={personData}
            onCheckPerson={checkPersonHandler}
        />
    ));

    return (
        <div className={classes["expense-manager"]}>
            <h1>Expense Manager</h1>
            <DarkCard>
                <ManagedExpense
                    expenseData={managedExpense}
                    onRemove={removeManagedExpenseHandler}
                />
            </DarkCard>
            <p>People</p>
            <DarkCard>{peopleList}</DarkCard>
            <Button onClick={props.onCloseManager}>
                <LeftIcon /> Go back
            </Button>
        </div>
    );
};

export default ExpenseManager;
