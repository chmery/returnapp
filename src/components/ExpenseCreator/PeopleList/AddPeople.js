import classes from "./AddPeople.module.css";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";
import { useRef, useState } from "react";
import AddPeopleInputs from "./AddPeopleInputs";
import ErrorModal from "../../ErrorModal/ErrorModal";
import useModal from "../../../hooks/use-modal";

const AddPeople = (props) => {
    const { showModal, closeModal, isModalShown, message, isClosing } = useModal();

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const nameInput = useRef();

    const confirmHandler = () => {
        const enteredName = nameInput.current.value;
        const enteredAmount = +amount;

        const personData = {
            name: enteredName,
            amount: enteredAmount,
        };

        if (enteredName.length === 0 || !enteredAmount) {
            showModal("The name and amount field cannot be empty.");
            return;
        }

        if (enteredAmount > 5000) {
            showModal("The maximum amount you can enter is $5000.");
            return;
        }

        if (props.peopleAmount === 10) {
            showModal("You have added the maximum number of debtors.");
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
            {isModalShown && (
                <ErrorModal
                    onModalClose={closeModal}
                    isModalClosing={isClosing}
                    message={message}
                />
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
