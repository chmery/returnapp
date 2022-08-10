import classes from "./ExpenseInfo.module.css";
import { BarsIcon } from "../../UI/Icons";

const ReturnAmount = (props) => {
    const returnAmount = `$${props.returnAmount}`;

    return (
        <div className={classes["return-amount"]}>
            <BarsIcon />
            <div className={classes.output}>
                <p>Return amount:</p>
                <p className={classes.numbers}>{returnAmount}</p>
            </div>
        </div>
    );
};

export default ReturnAmount;
