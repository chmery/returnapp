import classes from "./DarkCard.module.css";

type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
};

const DarkCard = ({ children, style }: Props) => {
    return (
        <div style={style} className={classes["dark-card"]}>
            {children}
        </div>
    );
};

export default DarkCard;
