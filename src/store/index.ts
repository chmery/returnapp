import { configureStore, createSlice } from "@reduxjs/toolkit";
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
        setExpensesData(state, { payload }: { payload: Expense[] }) {
            state.expenses = payload;
        },
        createExpense(state, { payload }: { payload: Expense }) {
            state.expenses.push(payload);
            setLocalStorageData(state.expenses);
        },
        removeExpense(state, { payload }: { payload: { idToRemove: string } }) {
            state.expenses = state.expenses.filter((expense) => expense.id !== payload.idToRemove);
            state.managedExpense = null;
            setLocalStorageData(state.expenses);
        },
        setManagedExpense(state, { payload }: { payload: { id: string } }) {
            const managedExpenseIndex = state.expenses.findIndex(
                (expense) => expense.id === payload.id
            );
            state.managedExpense = state.expenses[managedExpenseIndex];
        },
        updateManagedExpense(
            state,
            { payload }: { payload: { id: string; returnAmount: number } }
        ) {
            state.managedExpense!.people.forEach((person) => {
                if (person.id === payload.id) {
                    person.hasReturned = !person.hasReturned;

                    person.hasReturned
                        ? (state.managedExpense!.amountReturned += payload.returnAmount)
                        : (state.managedExpense!.amountReturned -= payload.returnAmount);
                }
            });
        },
        closeManagedExpense(state) {
            const managedExpenseIndex = state.expenses.findIndex(
                (expense) => expense.id === state.managedExpense!.id
            );

            state.expenses![managedExpenseIndex] = state.managedExpense!;
            state.managedExpense = null;
            setLocalStorageData(state.expenses);
        },
    },
});

const store = configureStore({
    reducer: expensesSlice.reducer,
});

export const expensesActions = expensesSlice.actions;

export default store;
