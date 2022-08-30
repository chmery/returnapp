import { configureStore, createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: "expenses",
    initialState: { expenses: [], managedExpense: null },
    reducers: {
        setExpensesData(state, { payload }) {
            state.expenses = payload;
        },
        createExpense(state, { payload }) {
            state.expenses.push(payload);
        },
        removeExpense(state, { payload }) {
            state.expenses = state.expenses.filter((expense) => expense.id !== payload.idToRemove);
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

/* export const getExpensesFromLocalStorage = () => {
    return (dispatch) => {
        const expensesFromLocalStorage = JSON.parse(localStorage.getItem("expenses"));
        if (!expensesFromLocalStorage) return;

        dispatch(expensesActions.setExpensesData(expensesFromLocalStorage));
    };
};

export const setExpensesInLocalStorage = (expenses) => {
    return () => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    };
}; */

const store = configureStore({
    reducer: expensesSlice.reducer,
});

export const expensesActions = expensesSlice.actions;

export default store;
