import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Expenses from "./components/Expenses/Expenses";
import ExpenseCreator from "./components/ExpenseCreator/ExpenseCreator";

import ExpenseManager from "./components/ExpenseManager/ExpenseManager";
import { useSelector, useDispatch } from "react-redux";
import { getExpensesFromLocalStorage, setExpensesInLocalStorage } from "./store";

function App() {
    const dispatch = useDispatch();
    const managedExpense = useSelector((state) => state.managedExpense);
    const expenses = useSelector((state) => state.expenses);
    const [isCreatorShown, setIsCreatorShown] = useState(false);

    useEffect(() => {
        dispatch(getExpensesFromLocalStorage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setExpensesInLocalStorage(expenses));
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
