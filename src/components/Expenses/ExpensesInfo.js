import Summary from "../UI/Summary";
import { BarsIcon, LayersIcon } from "../UI/Icons";
import { useContext } from "react";
import ExpensesContext from "../../store/expenses-context";

const TotalReturnInfo = (props) => {
    const leftToReturn = `$${props.leftToReturn}`;

    return (
        <div style={{ flex: "1 40%" }}>
            <BarsIcon />
            <div>
                <p>Total to return:</p>
                <span>{leftToReturn}</span>
            </div>
        </div>
    );
};

const TotalExpenses = (props) => {
    const expensesNum = props.expensesNum;

    return (
        <div>
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

    const calcTotal = (value) => {
        const total =
            expensesContext.expenses.reduce((total, expense) => (total += expense[value]), 0) * 100;

        return total;
    };

    const totalToReturnAmount = calcTotal("amount");
    const totalAmountReturned = calcTotal("amountReturned");

    const leftToReturn = (totalToReturnAmount - totalAmountReturned) / 100;

    const expensesNum = expensesContext.expenses.length;

    return (
        <Summary>
            <TotalReturnInfo leftToReturn={leftToReturn} />
            <TotalExpenses expensesNum={expensesNum} />
        </Summary>
    );
};

export default ExpensesInfo;
