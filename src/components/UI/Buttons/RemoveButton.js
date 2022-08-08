import classes from "./IconButton.module.css";
import RemoveIcon from "./RemoveIcon";

const RemoveButton = (props) => {
    return (
        <button onClick={props.onClick} className={classes.button}>
            <RemoveIcon />
        </button>
    );
};

export default RemoveButton;
