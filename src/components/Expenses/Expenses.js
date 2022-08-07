import Button from "../UI/Button";
import ExpenseCreator from "./ExpenseCreator";

import classes from "./Expenses.module.css";
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
            </div>
            <ExpenseCreator />
        </>
    );
};

export default Expenses;
