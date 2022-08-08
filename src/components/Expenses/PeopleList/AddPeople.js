import classes from "./AddPeople.module.css";
import Input from "../../UI/Input";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";
import { useRef, useState } from "react";

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
            <div className={classes.inputs}>
                <Input
                    ref={nameInput}
                    input={{ id: "name", type: "text", placeholder: "Name", value: name }}
                    onChange={nameChangeHandler}
                />
                <Input
                    ref={amountInput}
                    narrow={true}
                    input={{
                        id: "return-amount",
                        type: "number",
                        placeholder: "Amount",
                        value: amount,
                    }}
                    onChange={amountChangeHandler}
                />
            </div>
            <div className={classes.action}>
                <ButtonSecondary onClick={props.onCancel}>Cancel</ButtonSecondary>
                <ButtonSecondary onClick={confirmHandler}>Confirm</ButtonSecondary>
            </div>
        </div>
    );
};

export default AddPeople;
