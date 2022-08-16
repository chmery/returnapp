import { useState, useEffect } from "react";

const useModal = () => {
    const [isModalShown, setIsModalShown] = useState(false);
    const [message, setMessage] = useState("");
    const [isClosing, setIsClosing] = useState(false);

    const showModalHandler = (message) => {
        setIsModalShown(true);
        setMessage(message);
    };

    const hideModalHandler = () => {
        setIsModalShown(false);
        setMessage("");
        setIsClosing(false);
    };

    const closeModalHandler = () => {
        setIsClosing(true);
    };

    useEffect(() => {
        if (isClosing) {
            const waitTillAnimationEnds = setTimeout(hideModalHandler, 400);

            return () => {
                clearTimeout(waitTillAnimationEnds);
            };
        }
    }, [isClosing]);

    return {
        showModal: showModalHandler,
        closeModal: closeModalHandler,
        setIsClosing,
        isClosing,
        isModalShown,
        message,
    };
};

export default useModal;
