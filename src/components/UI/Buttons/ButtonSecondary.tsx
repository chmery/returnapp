import classes from "./ButtonSecondary.module.css";

const ButtonSecondary = (props) => {
    return (
        <button onClick={props.onClick} className={classes.button}>
            {props.children}
        </button>
    );
};

export default ButtonSecondary;
