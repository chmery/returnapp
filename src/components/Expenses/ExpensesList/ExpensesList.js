import DarkCard from "../../UI/Cards/DarkCard";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {
    const TEST_DATA = [
        {
            name: "Dinner",
            amount: "50",
            amountReturned: "20",
        },
    ];

    const expensesList = TEST_DATA.map((expense) => <ExpenseItem expenseData={expense} />);

    return <DarkCard>{expensesList}</DarkCard>;
};

export default ExpensesList;
