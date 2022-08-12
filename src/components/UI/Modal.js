import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalContent = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.color} />
            {props.children}
            <button onClick={props.onClose}>Okay</button>
        </div>
    );
};

const Modal = (props) => {
    const modalElements = document.getElementById("popups");

    return (
        <>
            {ReactDOM.createPortal(
                <ModalContent onClose={props.onClose}>{props.children}</ModalContent>,
                modalElements
            )}
        </>
    );
};

export default Modal;
