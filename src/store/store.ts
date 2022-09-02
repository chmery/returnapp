import { configureStore } from "@reduxjs/toolkit";
import ExpensesReducer from "./expensesSlice";

const store = configureStore({
    reducer: ExpensesReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
