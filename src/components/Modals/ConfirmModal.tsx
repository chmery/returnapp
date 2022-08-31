import Modal from "../UI/Modal";
import { TrashIcon } from "../UI/Icons";
import classes from "./Modals.module.css";

type Props = {
    onModalClose: () => void;
    onConfirm: () => void;
    isModalClosing: boolean;
};

const ConfirmModal = ({ onModalClose, onConfirm, isModalClosing }: Props) => {
    const btnColor = {
        background: "var(--yellow)",
    };

    return (
        <Modal
            onBackdropClick={onModalClose}
            isModalClosing={isModalClosing}
            color={"var(--yellow)"}
        >
            <TrashIcon />
            <div>
                <h3>Delete expense</h3>
                <p>This expense will be pernamently deleted.</p>
            </div>
            <div className={classes.action}>
                <button onClick={onConfirm} style={btnColor}>
                    Okay
                </button>
                <button onClick={onModalClose} style={btnColor}>
                    Cancel
                </button>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
