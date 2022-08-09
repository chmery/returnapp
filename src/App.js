import { useContext, useState } from "react";

import Header from "./components/Header/Header";
import Expenses from "./components/Expenses/Expenses";
import ExpenseCreator from "./components/ExpenseCreator/ExpenseCreator";
import ExpensesProvider from "./store/ExpensesProvider";

import "./css/typography.css";
import ExpensesContext from "./store/expenses-context";

function App() {
    const [isCreatorShown, setIsCreatorShown] = useState(false);

    const openCreatorHandler = () => setIsCreatorShown(true);
    const closeCreatorHandler = () => setIsCreatorShown(false);

    return (
        <ExpensesProvider>
            <Header />
            <main>
                {!isCreatorShown && <Expenses onOpenCreator={openCreatorHandler} />}
                {isCreatorShown && (
                    <ExpenseCreator
                        onCancel={closeCreatorHandler}
                        onCreateExpense={closeCreatorHandler}
                    />
                )}
            </main>
        </ExpensesProvider>
    );
}

export default App;
