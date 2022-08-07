import classes from "./Input.module.css";

const Input = (props) => {
    const isNarrow = props.narrow ? true : false;

    return (
        <label className={`${classes.label} ${isNarrow ? classes.narrow : ""}`}>
            {props.label}
            <input {...props.input} />
        </label>
    );
};

export default Input;
