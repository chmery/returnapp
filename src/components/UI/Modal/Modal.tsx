import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

type ModalProps = {
    onBackdropClick: () => void;
    isModalClosing: boolean;
    children: React.ReactNode;
    color: string;
};

type ModalContentProps = {
    children: React.ReactNode;
    exitClass: string;
    color: string;
};

const BackDrop = ({ onClick }: { onClick: () => void }) => {
    return <div className={classes.backdrop} onClick={onClick} />;
};

const ModalContent = ({ children, exitClass, color }: ModalContentProps) => {
    return (
        <div className={`${classes.modal} ${exitClass}`}>
            <div className={classes.color} style={{ background: color }} />
            {children}
        </div>
    );
};

const Modal = ({ onBackdropClick, isModalClosing, color, children }: ModalProps) => {
    const [exitClass, setExitClass] = useState("");

    const modalElements = document.getElementById("popups")!;
    const backdropElements = document.getElementById("overlays")!;

    const onBackdropClickHandler = () => {
        setExitClass(`${classes.exit}`);
        onBackdropClick();
    };

    useEffect(() => {
        if (isModalClosing) {
            setExitClass(`${classes.exit}`);
        }
    }, [isModalClosing]);

    return (
        <>
            {ReactDOM.createPortal(
                <ModalContent exitClass={exitClass} color={color}>
                    {children}
                </ModalContent>,
                modalElements
            )}
            {ReactDOM.createPortal(<BackDrop onClick={onBackdropClickHandler} />, backdropElements)}
        </>
    );
};

export default Modal;
