import { PlusIcon } from "../Icons";
import classes from "./PlusButton.module.css";

type Props = {
    onClick: () => void;
};

const PlusButton = ({ onClick }: Props) => {
    return (
        <button onClick={onClick} className={classes.button}>
            <PlusIcon />
        </button>
    );
};

export default PlusButton;
