import BrightCard from "../UI/Cards/BrightCard";
import CheckButton from "../UI/Buttons/CheckButton";

import classes from "./PeopleItem.module.css";

const PeopleItem = (props) => {
    const { personData } = props;
    const amount = `$${personData.amount}`;

    return (
        <BrightCard>
            <div>
                <p className={classes.name}>{personData.name}</p>
                <p className={classes.amount}>
                    Owes you: <span>{amount}</span>
                </p>
            </div>
            <CheckButton />
        </BrightCard>
    );
};

export default PeopleItem;
