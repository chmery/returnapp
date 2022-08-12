import classes from "./AddPeople.module.css";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";
import { useRef, useState } from "react";
import AddPeopleInputs from "./AddPeopleInputs";
import ErrorModal from "../../ErrorModal/ErrorModal";

const AddPeople = (props) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [isErrorModalShown, setIsErrorModalShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const closeErrorModalHandler = () => setIsErrorModalShown(false);

    const nameInput = useRef();

    const confirmHandler = () => {
        const enteredName = nameInput.current.value;
        const enteredAmount = +amount;

        const personData = {
            name: enteredName,
            amount: enteredAmount,
        };

        if (enteredName.length === 0 || enteredAmount < 1) {
            setIsErrorModalShown(true);
            setErrorMessage("The name and amount field cannot be empty.");
            return;
        }

        if (enteredAmount > 5000) {
            setIsErrorModalShown(true);
            setErrorMessage("The maximum amount you can enter is $5000.");
            return;
        }

        if (props.peopleAmount === 10) {
            setIsErrorModalShown(true);
            setErrorMessage("You have added the maximum number of debtors.");
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
        <>
            {isErrorModalShown && (
                <ErrorModal onClose={closeErrorModalHandler} message={errorMessage} />
            )}
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
        </>
    );
};

export default AddPeople;
