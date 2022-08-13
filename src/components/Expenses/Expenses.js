import Button from "../UI/Buttons/Button";
import classes from "./Expenses.module.css";
import ExpensesList from "../ExpensesList/ExpensesList";
import { PlusIcon } from "../UI/Icons";
import { useContext } from "react";
import ExpensesContext from "../../store/expenses-context";
import ExpensesInfo from "./ExpensesInfo";

const StarterMessage = () => (
    <p className={classes["start-text"]}>Start by adding your first expense.</p>
);
const Expenses = (props) => {
    const expensesContext = useContext(ExpensesContext);
    const areExpensesEmpty = expensesContext.expenses.length === 0 ? true : false;

    return (
        <div className={classes.expenses}>
            <h1>Your Expenses</h1>
            {areExpensesEmpty && <StarterMessage />}
            {!areExpensesEmpty && <ExpensesInfo />}
            {!areExpensesEmpty && <ExpensesList />}
            <Button onClick={props.onOpenCreator}>
                Add new expense <PlusIcon />
            </Button>
        </div>
    );
};

export default Expenses;
