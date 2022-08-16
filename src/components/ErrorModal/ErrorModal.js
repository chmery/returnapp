import Modal from "../UI/Modal";
import { AlertIcon } from "../UI/Icons";

const ErrorModal = (props) => {
    return (
        <Modal onBackdropClick={props.onModalClose} isModalClosing={props.isModalClosing}>
            <AlertIcon />
            <div>
                <h3>Whoops!</h3>
                <p>{props.message}</p>
            </div>
            <button onClick={props.onModalClose}>Ok</button>
        </Modal>
    );
};

export default ErrorModal;
