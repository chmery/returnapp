import Button from "../UI/Buttons/Button";
import classes from "./Expenses.module.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import PlusIcon from "../UI/Buttons/PlusIcon";

const StarterMessage = () => (
    <p className={classes["start-text"]}>Start by adding your first expense.</p>
);
const Expenses = (props) => {
    const areExpensesDataEmpty = props.expensesData.length === 0 ? true : false;

    return (
        <div className={classes.expenses}>
            <h1>Your Expenses</h1>
            {areExpensesDataEmpty && <StarterMessage />}
            {!areExpensesDataEmpty && <ExpensesList expensesData={props.expensesData} />}
            <Button onClick={props.onOpenCreator}>
                Add new expense <PlusIcon />
            </Button>
        </div>
    );
};

export default Expenses;
