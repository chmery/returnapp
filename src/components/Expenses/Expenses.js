import { useState } from "react";
import Button from "../UI/Buttons/Button";
import ExpenseCreator from "./ExpenseCreator/ExpenseCreator";

import classes from "./Expenses.module.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import PlusIcon from "../UI/Buttons/PlusIcon";

const StarterContent = (props) => {
    return (
        <div className={classes.expenses}>
            <h1>Your Expenses</h1>
            <p className={classes["start-text"]}>Start by adding your first expense.</p>
            <Button onClick={props.onOpenCreator}>
                Add new expense <PlusIcon />
            </Button>
        </div>
    );
};

const Expenses = () => {
    const [expensesData, setExpensesData] = useState([]);
    const [isCreatorShown, setIsCreatorShown] = useState(false);

    const openCreatorHandler = () => setIsCreatorShown(true);
    const closeCreatorHandler = () => setIsCreatorShown(false);

    const onCreateExpenseHandler = (expenseData) => {
        setExpensesData((prevExpensesData) => {
            return [...prevExpensesData, { expenseData }];
        });

        setIsCreatorShown(false);
    };

    return (
        <>
            {!isCreatorShown && <StarterContent onOpenCreator={openCreatorHandler} />}
            {isCreatorShown && (
                <ExpenseCreator
                    onCancel={closeCreatorHandler}
                    onCreateExpense={onCreateExpenseHandler}
                />
            )}
        </>
    );
};

export default Expenses;
