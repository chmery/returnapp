import Modal from "../UI/Modal";
import { TrashIcon } from "../UI/Icons";
import classes from "./Modals.module.css";

const ConfirmModal = (props) => {
    const btnColor = {
        background: "var(--yellow)",
    };

    return (
        <Modal
            onBackdropClick={props.onModalClose}
            isModalClosing={props.isModalClosing}
            color={"var(--yellow)"}
        >
            <TrashIcon />
            <div>
                <h3>Delete expense</h3>
                <p>This expense will be pernamently deleted.</p>
            </div>
            <div className={classes.action}>
                <button onClick={props.onConfirm} style={btnColor}>
                    Okay
                </button>
                <button onClick={props.onModalClose} style={btnColor}>
                    Cancel
                </button>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
