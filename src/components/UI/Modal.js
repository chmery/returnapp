import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalContent = (props) => {
    return (
        <div className={`${classes.modal} ${props.exitClass}`}>
            <div className={classes.color} />
            {props.children}
            <button onClick={props.onClose}>Okay</button>
        </div>
    );
};

const Modal = (props) => {
    const [exitClass, setExitClass] = useState("");

    const modalElements = document.getElementById("popups");
    const backdropElements = document.getElementById("overlays");

    const onCloseHandler = () => {
        setExitClass(`${classes.exit}`);
    };

    useEffect(() => {
        if (exitClass) {
            const waitTillAnimationEnds = setTimeout(props.onClose, 400);

            return () => {
                clearTimeout(waitTillAnimationEnds);
            };
        }
    }, [exitClass]);

    return (
        <>
            {ReactDOM.createPortal(
                <ModalContent onClose={onCloseHandler} exitClass={exitClass}>
                    {props.children}
                </ModalContent>,
                modalElements
            )}
            {ReactDOM.createPortal(<BackDrop onClose={onCloseHandler} />, backdropElements)}
        </>
    );
};

export default Modal;
