import Summary from "../UI/Summary";
import { BarsIcon, LayersIcon } from "../UI/Icons";
import { ExpenseData } from "../../types/types";

type Props = {
    expenses: ExpenseData[];
};

const TotalReturnInfo = ({ leftToReturn }: { leftToReturn: number }) => {
    return (
        <div style={{ flex: "1 40%" }}>
            <BarsIcon />
            <div>
                <p>Total to return:</p>
                <span>{`$${leftToReturn}`}</span>
            </div>
        </div>
    );
};

const TotalExpenses = ({ expensesNum }: { expensesNum: number }) => {
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

const ExpensesInfo = ({ expenses }: Props) => {
    const calcTotal = (value: "amount" | "amountReturned") => {
        const total = expenses.reduce((total, expense) => (total += expense[value]), 0) * 100;
        return total;
    };

    const totalToReturnAmount = calcTotal("amount");
    const totalAmountReturned = calcTotal("amountReturned");

    const leftToReturn = (totalToReturnAmount - totalAmountReturned) / 100;

    const expensesNum = expenses.length;

    return (
        <Summary>
            <TotalReturnInfo leftToReturn={leftToReturn} />
            <TotalExpenses expensesNum={expensesNum} />
        </Summary>
    );
};

export default ExpensesInfo;
