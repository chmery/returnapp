import DarkCard from "../UI/Cards/DarkCard";
import ExpenseItem from "./ExpenseItem";
import { useSelector, useDispatch } from "react-redux";
import { expensesActions } from "../../store/expensesSlice";
import ConfirmModal from "../Modals/ConfirmModal";
import useModal from "../../hooks/use-modal";
import { useState } from "react";

import { PersonData } from "../ExpenseCreator/ExpenseCreator";

type Expense = {
    id: string;
    title: string;
    amount: number;
    amountReturned: number;
    people: PersonData[];
};

type State = {
    expenses: Expense[];
};

const ExpensesList = () => {
    const { showModal, closeModal, isModalShown, isClosing } = useModal();
    const [idToRemove, setIdToRemove] = useState<string>(null!);
    const dispatch = useDispatch();
    const expenses = useSelector((state: State) => state.expenses);

    const confirmRemoveHandler = (id: string) => {
        showModal();
        setIdToRemove(id);
    };

    const removeExpenseHandler = () => {
        closeModal();
        dispatch(expensesActions.removeExpense(idToRemove));
    };

    const manageExpenseHandler = (id: string) => dispatch(expensesActions.setManagedExpense(id));

    const expensesList = expenses.map((expenseData) => (
        <ExpenseItem
            key={expenseData.id}
            expenseData={expenseData}
            onRemove={confirmRemoveHandler}
            onManage={manageExpenseHandler}
        />
    ));

    return (
        <>
            {isModalShown && (
                <ConfirmModal
                    onModalClose={closeModal}
                    isModalClosing={isClosing}
                    onConfirm={removeExpenseHandler}
                />
            )}
            <DarkCard>{expensesList}</DarkCard>
        </>
    );
};

export default ExpensesList;
