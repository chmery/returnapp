import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Expenses from "./components/Expenses/Expenses";
import ExpenseCreator from "./components/ExpenseCreator/ExpenseCreator";

import ExpenseManager from "./components/ExpenseManager/ExpenseManager";
import { useSelector, useDispatch } from "react-redux";
import { expensesActions } from "./store";

type State = {
    expenses: [];
    managedExpense: null;
};

function App() {
    const dispatch = useDispatch();
    const managedExpense = useSelector((state: State) => state.managedExpense);
    const expenses = useSelector((state: State) => state.expenses);
    const [isCreatorShown, setIsCreatorShown] = useState(false);

    useEffect(() => {
        const expensesFromLocalStorage = JSON.parse(localStorage.getItem("expenses") || "");
        if (!expensesFromLocalStorage) return;
        dispatch(expensesActions.setExpensesData(expensesFromLocalStorage));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses, dispatch]);

    const openCreatorHandler = () => setIsCreatorShown(true);
    const closeCreatorHandler = () => setIsCreatorShown(false);

    return (
        <>
            <Header />
            <main>
                {!isCreatorShown && !managedExpense && (
                    <Expenses onOpenCreator={openCreatorHandler} />
                )}
                {isCreatorShown && (
                    <ExpenseCreator
                        onCancel={closeCreatorHandler}
                        onCreateExpense={closeCreatorHandler}
                    />
                )}
                {managedExpense && <ExpenseManager />}
            </main>
        </>
    );
}

export default App;
