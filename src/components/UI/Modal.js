import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalContent = (props) => {
    return (
        <div className={`${classes.modal} ${props.exitClass}`}>
            <div className={classes.color} />
            {props.children}
        </div>
    );
};

const Modal = (props) => {
    const [exitClass, setExitClass] = useState("");

    const modalElements = document.getElementById("popups");
    const backdropElements = document.getElementById("overlays");

    const onBackdropClickHandler = () => {
        setExitClass(`${classes.exit}`);
        props.onBackdropClick();
    };

    useEffect(() => {
        if (props.isModalClosing) {
            setExitClass(`${classes.exit}`);
        }
    }, [props.isModalClosing]);

    return (
        <>
            {ReactDOM.createPortal(
                <ModalContent exitClass={exitClass}>{props.children}</ModalContent>,
                modalElements
            )}
            {ReactDOM.createPortal(<BackDrop onClick={onBackdropClickHandler} />, backdropElements)}
        </>
    );
};

export default Modal;
