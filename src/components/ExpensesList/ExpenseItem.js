import classes from "./ExpenseItem.module.css";

import BrightCard from "../UI/Cards/BrightCard";
import ManageButton from "../UI/Buttons/ManageButton";
import RemoveButton from "../UI/Buttons/RemoveButton";

const Status = (props) => {
    const { amountReturned, amount } = props.expenseData;
    const isExpenseFinished = amountReturned === amount;

    const content = (
        <>
            {isExpenseFinished ? "Finished" : "Unfinished"}
            <div className={isExpenseFinished ? classes.finished : classes.unfinished} />
        </>
    );

    return <p className={classes.status}>{content}</p>;
};

const ExpenseItem = (props) => {
    const { expenseData } = props;

    const title = `${expenseData.title} `;
    const amount = `$${expenseData.amount}`;

    const onRemoveHandler = () => props.onRemove(expenseData.id);
    const onManageHandler = () => props.onManage(expenseData.id);

    return (
        <BrightCard>
            <div>
                <Status expenseData={expenseData} />
                <p className={classes.title}>
                    {title}
                    <span className={classes.amount}>
                        ( <span>{amount}</span> )
                    </span>
                </p>
            </div>
            <div className={classes.action}>
                <ManageButton onClick={onManageHandler} />
                <RemoveButton onClick={onRemoveHandler} />
            </div>
        </BrightCard>
    );
};

export default ExpenseItem;
