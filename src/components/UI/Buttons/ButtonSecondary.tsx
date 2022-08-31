import classes from "./ButtonSecondary.module.css";

type Props = {
    onClick: () => void;
    children: React.ReactNode;
};

const ButtonSecondary = ({ onClick, children }: Props) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {children}
        </button>
    );
};

export default ButtonSecondary;
