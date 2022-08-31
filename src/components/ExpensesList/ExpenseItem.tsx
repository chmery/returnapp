import classes from "./ExpenseItem.module.css";

import BrightCard from "../UI/Cards/BrightCard";
import ManageButton from "../UI/Buttons/ManageButton";
import RemoveButton from "../UI/Buttons/RemoveButton";

import { PersonData } from "../ExpenseCreator/ExpenseCreator";

type Expense = {
    id: string;
    title: string;
    amount: number;
    amountReturned: number;
    people: PersonData[];
};

type Props = {
    expenseData: Expense;
    onRemove?: (id: string) => void;
    onManage?: (id: string) => void;
};

const Status = ({ expenseData }: Props) => {
    const { amountReturned, amount } = expenseData;
    const isExpenseFinished = amountReturned === amount;

    const content = (
        <>
            {isExpenseFinished ? "Finished" : "Unfinished"}
            <div className={isExpenseFinished ? classes.finished : classes.unfinished} />
        </>
    );

    return <div className={classes.status}>{content}</div>;
};

const ExpenseItem = ({ expenseData, onRemove, onManage }: Props) => {
    const title = `${expenseData.title} `;
    const amount = `$${expenseData.amount}`;

    const onRemoveHandler = () => onRemove!(expenseData.id);
    const onManageHandler = () => onManage!(expenseData.id);

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
