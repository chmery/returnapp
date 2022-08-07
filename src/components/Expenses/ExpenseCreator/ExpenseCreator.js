import classes from "./ExpenseCreator.module.css";

import Button from "../../UI/Buttons/Button";
import Input from "../../UI/Input";
import PeopleList from "../PeopleList/PeopleList";

const ExpenseCreator = () => {
    return (
        <div className={classes.creator}>
            <h1>Expense Creator</h1>
            <Input label={"Title"} input={{ id: "title", type: "text" }} />
            <Input label={"Total Amount"} input={{ id: "amount", type: "number" }} />
            <PeopleList />
            <div className={classes.action}>
                <Button>Cancel</Button>
                <Button>Create Expense</Button>
            </div>
        </div>
    );
};

export default ExpenseCreator;
