import classes from "./ExpenseCreator.module.css";

import Button from "../UI/Buttons/Button";
import Input from "../UI/Input";
import PeopleList from "./PeopleList/PeopleList";
import { useContext, useRef, useState } from "react";
import ExpensesContext from "../../store/expenses-context";

const ExpenseCreator = (props) => {
    const [peopleData, setPeopleData] = useState([]);
    const [expenseAmount, setExpenseAmount] = useState(0);

    const expensesContext = useContext(ExpensesContext);

    const titleInput = useRef();

    const addPersonHandler = (personData) => {
        setExpenseAmount((prevExpenseAmount) => (prevExpenseAmount += personData.amount));

        setPeopleData((prevPeopleData) => {
            return [...prevPeopleData, personData];
        });
    };

    const removePersonHandler = (personsDue, updatedPeopleData) => {
        setExpenseAmount((prevExpenseAmount) => (prevExpenseAmount -= personsDue));
        setPeopleData(updatedPeopleData);
    };

    const isExpenseValid = (title) => {
        if (title.length === 0) {
            console.log("Title cant be empty");
            return false;
        }

        if (title.length > 40) {
            console.log("You have exceeded the maximum number of characters per title");
            return false;
        }

        if (peopleData.length === 0) {
            console.log("You need to add 1 person at least.");
            return false;
        }

        return true;
    };

    const createExpenseHandler = () => {
        const title = titleInput.current.value;
        const amount = expenseAmount;

        if (!isExpenseValid(title)) return;

        const expense = {
            id: `${title}${expensesContext.expenses.length}`,
            title: title,
            amount: amount,
            amountReturned: 0,
            people: peopleData,
        };

        expensesContext.onCreate(expense);
        props.onCreateExpense();
    };

    return (
        <div className={classes.creator}>
            <h1>Expense Creator</h1>
            <Input ref={titleInput} label={"Title"} input={{ id: "title", type: "text" }} />
            <p>Amount to return: ${expenseAmount}</p>
            <PeopleList
                onAddPerson={addPersonHandler}
                onRemovePerson={removePersonHandler}
                peopleData={peopleData}
            />
            <div className={classes.action}>
                <Button onClick={props.onCancel}>Cancel</Button>
                <Button onClick={createExpenseHandler}>Create Expense</Button>
            </div>
        </div>
    );
};

export default ExpenseCreator;
