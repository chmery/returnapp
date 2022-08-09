import BrightCard from "../UI/Cards/BrightCard";
import DarkCard from "../UI/Cards/DarkCard";
import RemoveButton from "../UI/Buttons/RemoveButton";

import classes from "./ManagedExpense.module.css";

const ManagedExpense = (props) => {
    const { expenseData } = props;

    const title = `${expenseData.title} `;
    const amount = `$${expenseData.amount}`;
    const amountReturned = ` $${expenseData.amountReturned}`;

    const onRemoveHandler = () => props.onRemove(expenseData.id);

    return (
        <DarkCard>
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
                    <RemoveButton onClick={onRemoveHandler} />
                </div>
            </BrightCard>
        </DarkCard>
    );
};

export default ManagedExpense;
