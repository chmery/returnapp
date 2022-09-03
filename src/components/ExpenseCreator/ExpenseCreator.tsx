import classes from "./ExpenseCreator.module.css";
import Button from "../UI/Buttons/Button";
import Input from "../UI/Input/Input";
import PeopleList from "./PeopleList/PeopleList";
import { useRef, useState } from "react";
import ExpenseInfo from "./ExpenseInfo";
import ErrorModal from "../Modals/ErrorModal";
import useModal from "../UI/Modal/use-modal";
import { useSelector, useDispatch } from "react-redux";
import { expensesActions } from "../../store/expensesSlice";
import { PersonData, ExpenseData } from "../../types/types";
import {
    isExpenseValid,
    formatSummedAmount,
    formatSubstractedAmount,
} from "./expenseCreatorHelpers";

type CreatorProps = {
    onCreateExpense: () => void;
    onCancel: () => void;
};

type State = {
    expenses: ExpenseData[];
    managedExpense: null;
};

const ExpenseCreator = ({ onCreateExpense, onCancel }: CreatorProps) => {
    const dispatch = useDispatch();
    const expenses = useSelector((state: State) => state.expenses);
    const { showModal, closeModal, isModalShown, message, isClosing } = useModal();

    const [peopleData, setPeopleData] = useState<PersonData[]>([]);
    const [expenseAmount, setExpenseAmount] = useState(0);

    const titleInput = useRef<HTMLInputElement>(null!);

    const addPersonHandler = (personData: PersonData) => {
        setExpenseAmount((prevExpenseAmount) => {
            const updatedExpenseAmount = formatSummedAmount(personData, prevExpenseAmount);
            return updatedExpenseAmount;
        });

        setPeopleData((prevPeopleData) => {
            return [...prevPeopleData, personData];
        });
    };

    const removePersonHandler = (personsDue: number, updatedPeopleData: PersonData[]) => {
        setExpenseAmount((prevExpenseAmount) => {
            const updatedExpenseAmount = formatSubstractedAmount(personsDue, prevExpenseAmount);
            return updatedExpenseAmount;
        });

        setPeopleData(updatedPeopleData);
    };

    const createExpenseHandler = () => {
        const title = titleInput.current!["value"];
        const id = `${title}${expenses.length}`;
        const amount = expenseAmount;

        if (isExpenseValid(title, peopleData) !== true) {
            const errorMessage = isExpenseValid(title, peopleData);
            showModal(`${errorMessage}`);
            return;
        }

        const expense = {
            id: id,
            title: title,
            amount: amount,
            amountReturned: 0,
            people: peopleData,
        };

        dispatch(expensesActions.createExpense(expense));
        onCreateExpense();
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
                    input={{ id: "title", type: "text", maxLength: 30 }}
                />
                <ExpenseInfo returnAmount={expenseAmount} debtorsAmount={peopleData.length} />
                <PeopleList
                    onAddPerson={addPersonHandler}
                    onRemovePerson={removePersonHandler}
                    peopleData={peopleData}
                />
                <div className={classes.action}>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button onClick={createExpenseHandler}>Create Expense</Button>
                </div>
            </div>
        </>
    );
};

export default ExpenseCreator;
