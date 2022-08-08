import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const isNarrow = props.narrow ? true : false;

    return (
        <label className={`${classes.label} ${isNarrow ? classes.narrow : ""}`}>
            {props.label}
            <input ref={ref} {...props.input} onChange={props.onChange} />
        </label>
    );
});

export default Input;
