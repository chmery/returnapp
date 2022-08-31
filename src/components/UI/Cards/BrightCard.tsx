import classes from "./BrightCard.module.css";

type Props = {
    children: React.ReactNode;
};

const BrightCard = ({ children }: Props) => {
    return <div className={classes["bright-card"]}>{children}</div>;
};

export default BrightCard;
