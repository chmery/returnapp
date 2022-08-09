import classes from "./ExpenseItem.module.css";

import BrightCard from "../UI/Cards/BrightCard";
import ManageButton from "../UI/Buttons/ManageButton";
import RemoveButton from "../UI/Buttons/RemoveButton";

const ExpenseItem = (props) => {
    const { expenseData } = props;

    const title = `${expenseData.title} `;
    const amount = `$${expenseData.amount}`;
    const amountReturned = ` $${expenseData.amountReturned}`;

    const onRemoveHandler = () => props.onRemove(expenseData.id);

    return (
        <BrightCard>
            <div>
                <p className={classes.title}>
                    {title}
                    <span className={classes.amount}>
                        ( <span>{amount}</span> )
                    </span>
                </p>
                <p className={classes.returned}>
                    Returned:
                    <span>{amountReturned}</span>
                </p>
            </div>
            <div className={classes.action}>
                <ManageButton />
                <RemoveButton onClick={onRemoveHandler} />
            </div>
        </BrightCard>
    );
};

export default ExpenseItem;
