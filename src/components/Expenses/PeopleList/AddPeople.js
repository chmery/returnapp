import classes from "./AddPeople.module.css";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";
import { useRef, useState } from "react";
import AddPeopleInputs from "./AddPeopleInputs";

const AddPeople = (props) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const nameInput = useRef();
    const amountInput = useRef();

    const confirmHandler = () => {
        const enteredName = nameInput.current.value;
        const enteredAmount = amountInput.current.value;
        const personData = {
            name: enteredName,
            amount: +enteredAmount,
        };

        props.onAddPerson(personData);
        setName("");
        setAmount("");
    };

    const nameChangeHandler = () => setName(nameInput.current.value);
    const amountChangeHandler = () => setAmount(amountInput.current.value);

    return (
        <div className={classes["add-people"]}>
            <AddPeopleInputs
                nameValue={name}
                nameRef={nameInput}
                onNameChange={nameChangeHandler}
                amountValue={amount}
                amountRef={amountInput}
                onAmountChange={amountChangeHandler}
            />
            <div className={classes.action}>
                <ButtonSecondary onClick={props.onCancel}>Cancel</ButtonSecondary>
                <ButtonSecondary onClick={confirmHandler}>Confirm</ButtonSecondary>
            </div>
        </div>
    );
};

export default AddPeople;
