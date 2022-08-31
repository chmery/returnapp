import classes from "./Button.module.css";

type Props = {
    onClick: () => void;
    children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {children}
        </button>
    );
};

export default Button;
