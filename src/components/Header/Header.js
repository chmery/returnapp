import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
    const defaultClass = `${styles.header}`;
    const [classes, setClasses] = useState(defaultClass);

    useEffect(() => {
        const scrollHandler = () => {
            const headerOffsetTop = document.querySelector("header").offsetTop;

            window.pageYOffset > headerOffsetTop
                ? setClasses(`${styles.header} ${styles.shadow}`)
                : setClasses(defaultClass);
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <header className={classes}>
            <p>ReturnApp</p>
        </header>
    );
};

export default Header;
