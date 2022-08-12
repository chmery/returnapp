import classes from "./ExpenseInfo.module.css";
import { PersonIcon } from "../../UI/Icons";

const DebtorsAmount = (props) => {
    const debtorsAmount = props.debtorsAmount;

    return (
        <div className={classes["debtors-amount"]}>
            <PersonIcon />
            <div className={classes.output}>
                <p>Debtors:</p>
                <p className={classes.numbers}>{debtorsAmount} / 10</p>
            </div>
        </div>
    );
};

export default DebtorsAmount;
