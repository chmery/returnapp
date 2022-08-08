import { useState } from "react";

import Header from "./components/Header/Header";
import Expenses from "./components/Expenses/Expenses";
import ExpenseCreator from "./components/Expenses/ExpenseCreator/ExpenseCreator";

import "./css/typography.css";

function App() {
    const [expensesData, setExpensesData] = useState([]);
    const [isCreatorShown, setIsCreatorShown] = useState(false);

    const openCreatorHandler = () => setIsCreatorShown(true);
    const closeCreatorHandler = () => setIsCreatorShown(false);

    const onCreateExpenseHandler = (expenseData) => {
        setExpensesData((prevExpensesData) => {
            return [...prevExpensesData, expenseData];
        });

        setIsCreatorShown(false);
    };

    return (
        <>
            <Header />
            <main>
                {!isCreatorShown && (
                    <Expenses expensesData={expensesData} onOpenCreator={openCreatorHandler} />
                )}
                {isCreatorShown && (
                    <ExpenseCreator
                        onCancel={closeCreatorHandler}
                        onCreateExpense={onCreateExpenseHandler}
                    />
                )}
            </main>
        </>
    );
}

export default App;
