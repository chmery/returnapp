import PlusIcon from "./PlusIcon";
import classes from "./PlusButton.module.css";

const PlusButton = (props) => {
    return (
        <button onClick={props.onClick} className={classes.button}>
            <PlusIcon />
        </button>
    );
};

export default PlusButton;
