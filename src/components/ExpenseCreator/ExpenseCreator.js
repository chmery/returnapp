import classes from "./ExpenseCreator.module.css";

import Button from "../UI/Buttons/Button";
import Input from "../UI/Input";
import PeopleList from "./PeopleList/PeopleList";
import { useContext, useRef, useState } from "react";
import ExpensesContext from "../../store/expenses-context";
import ExpenseInfo from "./ExpenseInfo";
import ErrorModal from "../Modals/ErrorModal";
import useModal from "../../hooks/use-modal";

const ExpenseCreator = (props) => {
    const expensesContext = useContext(ExpensesContext);
    const { showModal, closeModal, isModalShown, message, isClosing } = useModal();

    const [peopleData, setPeopleData] = useState([]);
    const [expenseAmount, setExpenseAmount] = useState(0);

    const titleInput = useRef();

    const addPersonHandler = (personData) => {
        setExpenseAmount((prevExpenseAmount) => {
            const prevAmountFormated = prevExpenseAmount * 100;
            const newAmountFormated = personData.amount * 100;

            const updatedExpenseAmount = (prevAmountFormated + newAmountFormated) / 100;
            return updatedExpenseAmount;
        });

        setPeopleData((prevPeopleData) => {
            return [...prevPeopleData, personData];
        });
    };

    const removePersonHandler = (personsDue, updatedPeopleData) => {
        setExpenseAmount((prevExpenseAmount) => {
            const prevAmountFormated = prevExpenseAmount * 100;
            const personsDueFormated = personsDue * 100;

            const updatedExpenseAmount = (prevAmountFormated - personsDueFormated) / 100;
            return updatedExpenseAmount;
        });

        setPeopleData(updatedPeopleData);
    };

    const isExpenseValid = (title) => {
        if (title.length === 0) {
            showModal("Title can't be empty");
            return false;
        }

        if (peopleData.length === 0) {
            showModal("You need to add one person at least.");
            return false;
        }

        return true;
    };

    const createExpenseHandler = () => {
        const title = titleInput.current.value;
        const id = `${title}${expensesContext.expenses.length}`;
        const amount = expenseAmount;

        if (!isExpenseValid(title)) return;

        const expense = {
            id: id,
            title: title,
            amount: amount,
            amountReturned: 0,
            people: peopleData,
        };

        expensesContext.onCreate(expense);
        props.onCreateExpense();
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
            <div className={classes.creator}>
                <h1>Expense Creator</h1>
                <Input
                    ref={titleInput}
                    label={"Title"}
                    input={{ id: "title", type: "text", maxLength: "30" }}
                />
                <ExpenseInfo returnAmount={expenseAmount} debtorsAmount={peopleData.length} />
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
        </>
    );
};

export default ExpenseCreator;
