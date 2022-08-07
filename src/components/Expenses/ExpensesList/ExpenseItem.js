import classes from "./ExpensesItem.module.css";

import BrightCard from "../../UI/Cards/BrightCard";

const ExpenseItem = (props) => {
    const { expenseData } = props;

    const name = `${expenseData.name} `;
    const amount = `$${expenseData.amount}`;
    const amountReturned = ` $${expenseData.amountReturned}`;

    return (
        <BrightCard>
            <div>
                <p className={classes.title}>
                    {name}
                    <span className={classes.amount}>
                        ( <span>{amount}</span> )
                    </span>
                </p>
                <p className={classes.returned}>
                    Returned:
                    <span>{amountReturned}</span>
                </p>
            </div>
            <div>icons</div>
        </BrightCard>
    );
};

export default ExpenseItem;
