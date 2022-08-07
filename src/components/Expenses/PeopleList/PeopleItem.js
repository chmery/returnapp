import classes from "./PeopleItem.module.css";

import ExitIcon from "../ExitIcon";

const PeopleItem = (props) => {
    const { personData } = props;
    const amount = ` $${personData.amount}`;

    return (
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
    );
};

export default PeopleItem;
