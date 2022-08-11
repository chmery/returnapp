import Modal from "../UI/Modal";
import { AlertIcon } from "../UI/Icons";

const ErrorModal = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <AlertIcon />
            <h3>Whoops!</h3>
            <p>{props.message}</p>
        </Modal>
    );
};

export default ErrorModal;
