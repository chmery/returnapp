import DarkCard from "../UI/Cards/DarkCard";
import ExpenseItem from "./ExpenseItem";
import { useSelector, useDispatch } from "react-redux";
import { expensesActions } from "../../store";
import ConfirmModal from "../Modals/ConfirmModal";
import useModal from "../../hooks/use-modal";

const ExpensesList = () => {
    const { showModal, closeModal, isModalShown, isClosing } = useModal();
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses);

    const confirmRemoveHandler = (id) => {
        showModal();
        dispatch(expensesActions.confirmRemove(id));
    };

    const removeExpenseHandler = () => {
        closeModal();
        dispatch(expensesActions.removeExpense());
    };

    const cancelRemoveHandler = () => {
        closeModal();
        dispatch(expensesActions.cancelRemove());
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
                    onModalClose={cancelRemoveHandler}
                    isModalClosing={isClosing}
                    onConfirm={removeExpenseHandler}
                />
            )}
            <DarkCard>{expensesList}</DarkCard>
        </>
    );
};

export default ExpensesList;
