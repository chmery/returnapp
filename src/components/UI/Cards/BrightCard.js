import classes from "./BrightCard.module.css";

const BrightCard = (props) => {
    return <div className={classes["bright-card"]}>{props.children}</div>;
};

export default BrightCard;
