import DarkCard from "../../UI/Cards/DarkCard";
import classes from "./ExpenseInfo.module.css";
import ReturnAmount from "./ReturnAmount";
import DebtorsAmount from "./DebtorsAmount";

const ExpenseInfo = (props) => {
    return (
        <DarkCard>
            <div className={classes["expense-info"]}>
                <ReturnAmount returnAmount={props.returnAmount} />
                <DebtorsAmount debtorsAmount={props.debtorsAmount} />
            </div>
        </DarkCard>
    );
};

export default ExpenseInfo;
