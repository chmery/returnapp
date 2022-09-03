import Modal from "../UI/Modal/Modal";
import { AlertIcon } from "../UI/Icons";
import classes from "./Modals.module.css";

type Props = {
    onModalClose: () => void;
    isModalClosing: boolean;
    message: string;
};

const ErrorModal = ({ onModalClose, isModalClosing, message }: Props) => {
    const btnColor = {
        background: "var(--red)",
    };

    return (
        <Modal onBackdropClick={onModalClose} isModalClosing={isModalClosing} color={"var(--red)"}>
            <AlertIcon />
            <div>
                <h3>Whoops!</h3>
                <p>{message}</p>
            </div>
            <div className={classes.action}>
                <button onClick={onModalClose} style={btnColor}>
                    Ok
                </button>
            </div>
        </Modal>
    );
};

export default ErrorModal;
