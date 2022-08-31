import styles from "./IconButton.module.css";
import { CheckIcon } from "../Icons";

type Props = {
    onClick: () => void;
    isAmountReturned: boolean;
};

const CheckButton = ({ onClick, isAmountReturned }: Props) => {
    const classes = `${styles.button} ${!isAmountReturned ? styles.unchecked : ""}`;

    return (
        <button onClick={onClick} className={classes}>
            <CheckIcon />
        </button>
    );
};

export default CheckButton;
