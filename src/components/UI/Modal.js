import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalContent = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
            <button onClick={props.onClose}>Okay</button>
        </div>
    );
};

const Modal = (props) => {
    const overlayElements = document.getElementById("overlays");

    return (
        <>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, overlayElements)}
            {ReactDOM.createPortal(
                <ModalContent onClose={props.onClose}>{props.children}</ModalContent>,
                overlayElements
            )}
        </>
    );
};

export default Modal;
