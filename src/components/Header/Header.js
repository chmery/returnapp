import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
    const defaultClass = `${styles.header}`;
    const [classes, setClasses] = useState(defaultClass);

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 0
                ? setClasses(`${styles.header} ${styles.shadow}`)
                : setClasses(defaultClass);
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <>
            <header className={classes}>
                <p>ReturnApp</p>
            </header>
            <div id="popups" className={styles.popup}></div>
        </>
    );
};

export default Header;
