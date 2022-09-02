import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonData } from "../components/ExpenseCreator/ExpenseCreator";

type Expense = {
    id: string;
    title: string;
    amount: number;
    amountReturned: number;
    people: PersonData[];
};

type SliceState = {
    expenses: Expense[];
    managedExpense: Expense | null;
};

const initialState: SliceState = { expenses: [], managedExpense: null };

const setLocalStorageData = (expenses: Expense[]) =>
    localStorage.setItem("expenses", JSON.stringify(expenses));

const expensesSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        setExpensesData(state, action: PayloadAction<Expense[]>) {
            state.expenses = action.payload;
        },
        createExpense(state, action: PayloadAction<Expense>) {
            state.expenses.push(action.payload);
            setLocalStorageData(state.expenses);
        },
        removeExpense(state, action: PayloadAction<string>) {
            state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
            state.managedExpense = null;
            setLocalStorageData(state.expenses);
        },
        setManagedExpense(state, action: PayloadAction<string>) {
            const managedExpenseIndex = state.expenses.findIndex(
                (expense) => expense.id === action.payload
            );
            state.managedExpense = state.expenses[managedExpenseIndex];
        },
        updateManagedExpense(state, action: PayloadAction<{ id: string; returnAmount: number }>) {
            state.managedExpense!.people.forEach((person) => {
                if (person.id === action.payload.id) {
                    person.hasReturned = !person.hasReturned;

                    person.hasReturned
                        ? (state.managedExpense!.amountReturned += action.payload.returnAmount)
                        : (state.managedExpense!.amountReturned -= action.payload.returnAmount);
                }
            });
        },
        closeManagedExpense(state) {
            const managedExpenseIndex = state.expenses.findIndex(
                (expense) => expense.id === state.managedExpense!.id
            );

            state.expenses[managedExpenseIndex] = state.managedExpense!;
            state.managedExpense = null;
            setLocalStorageData(state.expenses);
        },
    },
});

export const expensesActions = expensesSlice.actions;
const ExpensesReducer = expensesSlice.reducer;
export default ExpensesReducer;
