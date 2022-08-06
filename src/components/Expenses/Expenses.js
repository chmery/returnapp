import classes from "./Expenses.module.css";

const Expenses = () => {
    return (
        <>
            <div className={classes.expenses}>
                <h1>Your Expenses</h1>
                <p className={classes["start-text"]}>Start by adding your first expense.</p>
            </div>
        </>
    );
};

export default Expenses;
