import Modal from "../UI/Modal";
import { TrashIcon } from "../UI/Icons";

const ConfirmModal = (props) => {
    return (
        <Modal onBackdropClick={props.onModalClose} isModalClosing={props.isModalClosing}>
            <TrashIcon />
            <div>
                <h3>Delete expense</h3>
                <p>This expense will be pernamently deleted.</p>
            </div>
            <button onClick={props.onConfirm}>Okay</button>
            <button onClick={props.onModalClose}>Cancel</button>
        </Modal>
    );
};

export default ConfirmModal;
