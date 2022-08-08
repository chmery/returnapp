import DarkCard from "../../UI/Cards/DarkCard";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    const expensesList = props.expensesData.map((expenseData) => (
        <ExpenseItem expenseData={expenseData} />
    ));

    return <DarkCard>{expensesList}</DarkCard>;
};

export default ExpensesList;
