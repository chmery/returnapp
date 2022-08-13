import classes from "./DarkCard.module.css";

const DarkCard = (props) => {
    return (
        <div style={props.style} className={classes["dark-card"]}>
            {props.children}
        </div>
    );
};

export default DarkCard;
