import classes from "./AddPeople.module.css";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";
import { useRef, useState } from "react";
import AddPeopleInputs from "./AddPeopleInputs";

const AddPeople = (props) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const nameInput = useRef();

    const confirmHandler = () => {
        const enteredName = nameInput.current.value;
        const enteredAmount = +amount;
        //const formatedAmount = Math.trunc(enteredAmount * 100);

        const personData = {
            name: enteredName,
            amount: enteredAmount,
        };

        if (enteredName.length === 0) {
            console.log("Name cant be empty");
            return;
        }

        if (enteredAmount > 5000) {
            console.log("amount cannot be greater than 5000");
            return;
        }

        props.onAddPerson(personData);
        props.onHide();
        setName("");
        setAmount("");
    };

    const nameChangeHandler = () => setName(nameInput.current.value);
    const amountChangeHandler = (amountValue) => {
        setAmount(amountValue);
    };

    return (
        <div className={classes["add-people"]}>
            <AddPeopleInputs
                nameValue={name}
                nameRef={nameInput}
                onNameChange={nameChangeHandler}
                amountValue={amount}
                onAmountChange={amountChangeHandler}
            />
            <div className={classes.action}>
                <ButtonSecondary onClick={props.onHide}>Cancel</ButtonSecondary>
                <ButtonSecondary onClick={confirmHandler}>Confirm</ButtonSecondary>
            </div>
        </div>
    );
};

export default AddPeople;
