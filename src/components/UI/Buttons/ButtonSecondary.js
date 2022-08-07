import classes from "./ButtonSecondary.module.css";

const ButtonSecondary = (props) => {
    return <button className={classes.button}>{props.children}</button>;
};

export default ButtonSecondary;
