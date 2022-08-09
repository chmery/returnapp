import classes from "./IconButton.module.css";
import CheckIcon from "./CheckIcon";

const CheckButton = (props) => {
    return (
        <button onClick={props.onClick} className={classes.button}>
            <CheckIcon />
        </button>
    );
};

export default CheckButton;
