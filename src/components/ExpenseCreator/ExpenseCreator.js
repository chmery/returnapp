import classes from "./ExpenseCreator.module.css";

import Button from "../UI/Buttons/Button";
import Input from "../UI/Input";
import PeopleList from "./PeopleList/PeopleList";
import { useContext, useRef, useState } from "react";
import ExpensesContext from "../../store/expenses-context";
import ExpenseInfo from "./ExpenseInfo/ExpenseInfo";
import ErrorModal from "../ErrorModal/ErrorModal";

const ExpenseCreator = (props) => {
    const [peopleData, setPeopleData] = useState([]);
    const [expenseAmount, setExpenseAmount] = useState(0);

    const [isErrorModalShown, setIsErrorModalShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const expensesContext = useContext(ExpensesContext);
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

    const closeErrorModalHandler = () => setIsErrorModalShown(false);

    const isExpenseValid = (title) => {
        if (title.length === 0) {
            setIsErrorModalShown(true);
            setErrorMessage("Title can't be empty");
            return false;
        }

        if (peopleData.length === 0) {
            setIsErrorModalShown(true);
            setErrorMessage("You need to add one person at least.");
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
        <>
            {isErrorModalShown && (
                <ErrorModal onClose={closeErrorModalHandler} message={errorMessage} />
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
