import classes from "./IconButton.module.css";
import { ManageIcon } from "../Icons";

type Props = {
    onClick: () => void;
};

const ManageButton = ({ onClick }: Props) => {
    return (
        <button onClick={onClick} className={classes.button}>
            <ManageIcon />
        </button>
    );
};

export default ManageButton;
