import ExpensesContext from "./expenses-context";
import { useState } from "react";
import ConfirmModal from "../components/Modals/ConfirmModal";
import useModal from "../hooks/use-modal";

const ExpensesProvider = (props) => {
    const { showModal, closeModal, isModalShown, isClosing } = useModal();
    const [expensesData, setExpensesData] = useState([]);
    const [managedExpense, setManagedExpense] = useState(null);
    const [idToRemove, setIdToRemove] = useState(null);

    const createExpenseHandler = (expenseData) => {
        setExpensesData((prevExpensesData) => {
            return [...prevExpensesData, expenseData];
        });
    };

    const confirmRemoveHandler = (id) => {
        setIdToRemove(id);
        showModal();
    };

    const removeExpenseHandler = () => {
        const updatedExpensesData = [...expensesData].filter(
            (personData) => personData.id !== idToRemove
        );
        setExpensesData(updatedExpensesData);
        setManagedExpense(null);
        closeModal();
    };

    const manageExpenseHandler = (id) => {
        const managedExpenseIndex = expensesData.findIndex((expense) => expense.id === id);
        const managedExpense = expensesData[managedExpenseIndex];

        setManagedExpense(managedExpense);
    };

    const closeManagerHandler = () => {
        const managedExpenseIndex = expensesData.findIndex(
            (expense) => expense.id === managedExpense.id
        );
        const updatedExpensesData = [...expensesData];
        updatedExpensesData[managedExpenseIndex] = managedExpense;

        setExpensesData(updatedExpensesData);
        setManagedExpense(null);
    };

    const expensesContext = {
        expenses: expensesData,
        managedExpense,
        setManagedExpense,
        onCloseManager: closeManagerHandler,
        onManage: manageExpenseHandler,
        onCreate: createExpenseHandler,
        onRemove: confirmRemoveHandler,
    };

    return (
        <>
            {isModalShown && (
                <ConfirmModal
                    onModalClose={closeModal}
                    isModalClosing={isClosing}
                    onConfirm={removeExpenseHandler.bind(null, idToRemove)}
                />
            )}
            <ExpensesContext.Provider value={expensesContext}>
                {props.children}
            </ExpensesContext.Provider>
        </>
    );
};

export default ExpensesProvider;
