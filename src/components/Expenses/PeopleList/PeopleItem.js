import classes from "./PeopleItem.module.css";

import ExitIcon from "../ExitIcon";
import BrightCard from "../../UI/Cards/BrightCard";

const PeopleItem = (props) => {
    const { personData } = props;
    const amount = ` $${personData.amount}`;

    return (
        <BrightCard>
            <div className={classes["people-item"]}>
                <div>
                    <p className={classes.name}>{personData.name}</p>
                    <p className={classes.text}>
                        Owes you:<span>{amount}</span>
                    </p>
                </div>
                <div className={classes.icon}>
                    <ExitIcon />
                </div>
            </div>
        </BrightCard>
    );
};

export default PeopleItem;
