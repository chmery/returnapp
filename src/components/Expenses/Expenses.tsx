import Button from "../UI/Buttons/Button";
import classes from "./Expenses.module.css";
import ExpensesList from "../ExpensesList/ExpensesList";
import { PlusIcon } from "../UI/Icons";
import ExpensesInfo from "./ExpensesInfo";
import { useSelector } from "react-redux";
import { ExpenseData } from "../../types/types";

type Props = {
    onOpenCreator: () => void;
};

type State = {
    expenses: ExpenseData[];
    managedExpense: ExpenseData;
};

const StarterMessage = () => (
    <p className={classes["start-text"]}>Start by adding your first expense.</p>
);

const Expenses = ({ onOpenCreator }: Props) => {
    const expenses = useSelector((state: State) => state.expenses);
    const areExpensesEmpty = expenses.length === 0 ? true : false;

    const expensesContent = (
        <>
            {areExpensesEmpty && <StarterMessage />}
            {!areExpensesEmpty && <ExpensesInfo expenses={expenses} />}
            {!areExpensesEmpty && <ExpensesList />}
        </>
    );

    return (
        <>
            <div className={classes.expenses}>
                <h1>Your Expenses</h1>
                {expensesContent}
                <Button onClick={onOpenCreator}>
                    Add new expense <PlusIcon />
                </Button>
            </div>
        </>
    );
};

export default Expenses;
