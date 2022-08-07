import classes from "./IconButton.module.css";
import RemoveIcon from "./RemoveIcon";

const RemoveButton = () => {
    return (
        <button className={classes.button}>
            <RemoveIcon />
        </button>
    );
};

export default RemoveButton;
