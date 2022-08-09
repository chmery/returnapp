import { useContext } from "react";
import ExpensesContext from "../../store/expenses-context";
import DarkCard from "../UI/Cards/DarkCard";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {
    const expensesContext = useContext(ExpensesContext);

    const onRemoveExpenseHandler = (id) => expensesContext.onRemove(id);
    const onManageExpenseHandler = (id) => expensesContext.onManage(id);

    const expensesList = expensesContext.expenses.map((expenseData) => (
        <ExpenseItem
            key={expenseData.id}
            expenseData={expenseData}
            onRemove={onRemoveExpenseHandler}
            onManage={onManageExpenseHandler}
        />
    ));

    return <DarkCard>{expensesList}</DarkCard>;
};

export default ExpensesList;
