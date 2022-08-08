import classes from "./AddPeople.module.css";
import Input from "../../UI/Input";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";
import { useRef, useState } from "react";

const AddPeople = (props) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const enteredName = useRef();
    const enteredAmount = useRef();

    const confirmHandler = () => {
        const personData = {
            name: enteredName.current.value,
            amount: +enteredAmount.current.value,
        };

        props.onAddPerson(personData);
        setName("");
        setAmount("");
    };

    const nameChangeHandler = () => setName(enteredName.current.value);
    const amountChangeHandler = () => setAmount(enteredAmount.current.value);

    return (
        <div className={classes["add-people"]}>
            <div className={classes.inputs}>
                <Input
                    ref={enteredName}
                    input={{ id: "name", type: "text", placeholder: "Name", value: name }}
                    onChange={nameChangeHandler}
                />
                <Input
                    ref={enteredAmount}
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
