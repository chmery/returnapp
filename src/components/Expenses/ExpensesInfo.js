import Summary from "../UI/Summary";
import { BarsIcon, LayersIcon } from "../UI/Icons";
import { useContext } from "react";
import ExpensesContext from "../../store/expenses-context";

const TotalReturnInfo = (props) => {
    const totalReturnAmount = `$${props.totalReturnAmount}`;

    return (
        <div style={{ width: "60%" }}>
            <BarsIcon />
            <div>
                <p>Total to return:</p>
                <span>{totalReturnAmount}</span>
            </div>
        </div>
    );
};

const TotalExpenses = (props) => {
    const expensesNum = props.expensesNum;

    return (
        <div style={{ width: "40%" }}>
            <LayersIcon />
            <div>
                <p>Expenses:</p>
                <span>{expensesNum}</span>
            </div>
        </div>
    );
};

const ExpensesInfo = () => {
    const expensesContext = useContext(ExpensesContext);

    const totalReturnAmount = expensesContext.expenses.reduce(
        (total, expense) => (total += expense.amount),
        0
    );

    const expensesNum = expensesContext.expenses.length;

    return (
        <Summary>
            <TotalReturnInfo totalReturnAmount={totalReturnAmount} />
            <TotalExpenses expensesNum={expensesNum} />
        </Summary>
    );
};

export default ExpensesInfo;
