import styles from "./IconButton.module.css";
import CheckIcon from "./CheckIcon";

const CheckButton = (props) => {
    const { isAmountReturned } = props;

    const classes = `${styles.button} ${!isAmountReturned ? styles.unchecked : ""}`;

    return (
        <button onClick={props.onClick} className={classes}>
            <CheckIcon />
        </button>
    );
};

export default CheckButton;
