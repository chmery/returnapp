import { configureStore, createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: "expenses",
    initialState: { expenses: [], managedExpense: null, idToRemove: null },
    reducers: {
        createExpense(state, { payload }) {
            state.expenses.push(payload);
        },
        confirmRemove(state, { payload }) {
            state.idToRemove = payload;
        },
        cancelRemove(state) {
            state.idToRemove = null;
        },
        removeExpense(state) {
            state.expenses = state.expenses.filter((expense) => expense.id !== state.idToRemove);
            state.idToRemove = null;
            state.managedExpense = null;
        },
        setManagedExpense(state, { payload }) {
            const managedExpenseIndex = state.expenses.findIndex(
                (expense) => expense.id === payload.id
            );
            state.managedExpense = state.expenses[managedExpenseIndex];
        },
        updateManagedExpense(state, { payload }) {
            state.managedExpense.people.forEach((person) => {
                if (person.id === payload.id) {
                    person.hasReturned = !person.hasReturned;

                    person.hasReturned
                        ? (state.managedExpense.amountReturned += payload.returnAmount)
                        : (state.managedExpense.amountReturned -= payload.returnAmount);
                }
            });
        },
        closeManagedExpense(state) {
            const managedExpenseIndex = state.expenses.findIndex(
                (expense) => expense.id === state.managedExpense.id
            );

            state.expenses[managedExpenseIndex] = state.managedExpense;
            state.managedExpense = null;
        },
    },
});

const store = configureStore({
    reducer: expensesSlice.reducer,
});

export const expensesActions = expensesSlice.actions;

export default store;
