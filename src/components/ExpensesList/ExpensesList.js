import DarkCard from "../UI/Cards/DarkCard";
import ExpenseItem from "./ExpenseItem";
import { useSelector, useDispatch } from "react-redux";
import { expensesActions } from "../../store";
import ConfirmModal from "../Modals/ConfirmModal";
import useModal from "../../hooks/use-modal";
import { useState } from "react";

const ExpensesList = () => {
    const { showModal, closeModal, isModalShown, isClosing } = useModal();
    const [idToRemove, setIdToRemove] = useState(null);
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses);

    const confirmRemoveHandler = (id) => {
        showModal();
        setIdToRemove(id);
    };

    const removeExpenseHandler = () => {
        closeModal();
        dispatch(expensesActions.removeExpense({ idToRemove }));
    };

    const manageExpenseHandler = (id) => dispatch(expensesActions.setManagedExpense({ id }));

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
