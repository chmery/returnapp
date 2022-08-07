import classes from "./ExpenseCreator.module.css";
import PlusIcon from "./PlusIcon";
import Button from "../UI/Button";

const ExpenseCreator = () => {
    return (
        <div className={classes.creator}>
            <h1>Expense Creator</h1>
            <label>
                Title
                <input type="text" />
            </label>
            <label>
                Total Amount
                <input type="number" />
            </label>
            <p className={classes.people}>People</p>
            <div className={classes["people-container"]}>
                <div className={classes.icon}>
                    <PlusIcon />
                </div>
            </div>
            <div className={classes.action}>
                <Button>Cancel</Button>
                <Button>Create Expense</Button>
            </div>
        </div>
    );
};

export default ExpenseCreator;
