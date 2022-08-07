import Button from "../UI/Buttons/Button";
import ExpenseCreator from "./ExpenseCreator/ExpenseCreator";

import classes from "./Expenses.module.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import PlusIcon from "./PlusIcon";

const Expenses = () => {
    return (
        <>
            <div className={classes.expenses}>
                <h1>Your Expenses</h1>
                <p className={classes["start-text"]}>Start by adding your first expense.</p>
                <Button>
                    Add new expense <PlusIcon />
                </Button>
                <ExpensesList />
            </div>
            <ExpenseCreator />
        </>
    );
};

export default Expenses;
