import Modal from "../UI/Modal";
import { AlertIcon } from "../UI/Icons";
import classes from "./Modals.module.css";

const ErrorModal = (props) => {
    const btnColor = {
        background: "var(--red)",
    };

    return (
        <Modal
            onBackdropClick={props.onModalClose}
            isModalClosing={props.isModalClosing}
            color={"var(--red)"}
        >
            <AlertIcon />
            <div>
                <h3>Whoops!</h3>
                <p>{props.message}</p>
            </div>
            <div className={classes.action}>
                <button onClick={props.onModalClose} style={btnColor}>
                    Ok
                </button>
            </div>
        </Modal>
    );
};

export default ErrorModal;
