import classes from "./ExpenseCreator.module.css";

import Button from "../../UI/Buttons/Button";
import Input from "../../UI/Input";
import PeopleList from "../PeopleList/PeopleList";
import { useRef, useState } from "react";

const ExpenseCreator = (props) => {
    const [peopleData, setPeopleData] = useState([]);

    const titleInput = useRef();
    const amountInput = useRef();

    const addPersonHandler = (personData) => {
        const name = personData.name;
        const amount = personData.amount;
        const id = `${name.slice(0, 1)}${peopleData.length}`;

        setPeopleData((prevPeopleData) => {
            return [...prevPeopleData, { id, name, amount }];
        });
    };

    const removePersonHandler = (id) => {
        const updatedPeopleData = [...peopleData].filter((personData) => personData.id !== id);
        setPeopleData(updatedPeopleData);
    };

    const createExpenseHandler = () => {
        const expense = {
            title: titleInput.current.value,
            amount: amountInput.current.value,
            amountReturned: 0,
            people: peopleData,
        };

        props.onCreateExpense(expense);
    };

    return (
        <div className={classes.creator}>
            <h1>Expense Creator</h1>
            <Input ref={titleInput} label={"Title"} input={{ id: "title", type: "text" }} />
            <Input
                ref={amountInput}
                label={"Total Amount"}
                input={{ id: "amount", type: "number" }}
            />
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
