import classes from "./Summary.module.css";
import DarkCard from "../UI/Cards/DarkCard";

const Summary = (props) => {
    return (
        <DarkCard style={{ marginBottom: "2em" }}>
            <div className={classes["summary"]}>{props.children}</div>
        </DarkCard>
    );
};

export default Summary;
