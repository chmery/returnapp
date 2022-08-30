import React from "react";

import classes from "./Input.module.css";

type InputProps = {
    narrow?: boolean;
    label: string;
    input: { id: string; type: string; maxLength: number };
    onChange?: () => void;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const isNarrow = props.narrow ? true : false;

    return (
        <label className={`${classes.label} ${isNarrow ? classes.narrow : ""}`}>
            {props.label}
            <input ref={ref} {...props.input} onChange={props.onChange} />
        </label>
    );
});

export default Input;
