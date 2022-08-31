import classes from "./IconButton.module.css";
import { RemoveIcon } from "../Icons";

type Props = {
    onClick: () => void;
};

const RemoveButton = ({ onClick }: Props) => {
    return (
        <button onClick={onClick} className={classes.button}>
            <RemoveIcon />
        </button>
    );
};

export default RemoveButton;
