import { useContext, useState } from "react";

import Header from "./components/Header/Header";
import Expenses from "./components/Expenses/Expenses";
import ExpenseCreator from "./components/ExpenseCreator/ExpenseCreator";

import "./css/typography.css";
import ExpensesContext from "./store/expenses-context";
import ExpenseManager from "./components/ExpenseManager/ExpenseManager";

function App() {
    const expensesContext = useContext(ExpensesContext);
    const { managedExpense } = expensesContext;
    const [isCreatorShown, setIsCreatorShown] = useState(false);

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
