import classes from "./IconButton.module.css";
import ManageIcon from "./ManageIcon";

const ManageButton = () => {
    return (
        <button className={classes.button}>
            <ManageIcon />
        </button>
    );
};

export default ManageButton;
