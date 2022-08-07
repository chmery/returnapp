import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <label className={classes.label}>
            {props.label}
            <input {...props.input} />
        </label>
    );
};

export default Input;
