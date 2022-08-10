import classes from "./IconButton.module.css";
import { ManageIcon } from "../Icons";

const ManageButton = (props) => {
    return (
        <button onClick={props.onClick} className={classes.button}>
            <ManageIcon />
        </button>
    );
};

export default ManageButton;
