import Button from "../UI/Buttons/Button";
import { LeftIcon } from "../UI/Icons";
import classes from "./ExpenseManager.module.css";
import ManagedExpense from "./ManagedExpense";
import PeopleList from "./PeopleList";
import { expensesActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../Modals/ConfirmModal";
import useModal from "../../hooks/use-modal";
import { useState } from "react";

const ExpenseManager = () => {
    const { showModal, closeModal, isModalShown, isClosing } = useModal();
    const [idToRemove, setIdToRemove] = useState(null);
    const dispatch = useDispatch();
    const managedExpense = useSelector((state) => state.managedExpense);

    const confirmRemoveHandler = (id) => {
        showModal();
        setIdToRemove(id);
    };

    const removeManagedExpenseHandler = () => {
        closeModal();
        dispatch(expensesActions.removeExpense({ idToRemove }));
    };

    const checkPersonHandler = (id, returnAmount) => {
        dispatch(expensesActions.updateManagedExpense({ id, returnAmount }));
    };

    const closeManagerHandler = () => {
        dispatch(expensesActions.closeManagedExpense());
    };

    return (
        <>
            {isModalShown && (
                <ConfirmModal
                    onModalClose={closeModal}
                    isModalClosing={isClosing}
                    onConfirm={removeManagedExpenseHandler}
                />
            )}
            <div className={classes["expense-manager"]}>
                <h1>Expense Manager</h1>
                <ManagedExpense expenseData={managedExpense} onRemove={confirmRemoveHandler} />
                <PeopleList managedExpense={managedExpense} onCheckPerson={checkPersonHandler} />
                <Button onClick={closeManagerHandler}>
                    <LeftIcon /> Go back
                </Button>
            </div>
        </>
    );
};

export default ExpenseManager;
