import classes from "./ExpenseCreator.module.css";
import PlusIcon from "./PlusIcon";
import Button from "../UI/Button";
import Input from "../UI/Input";

const ExpenseCreator = () => {
    return (
        <div className={classes.creator}>
            <h1>Expense Creator</h1>
            <Input label={"Title"} input={{ id: "title", type: "text" }} />
            <Input label={"Total Amount"} input={{ id: "amount", type: "number" }} />
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
