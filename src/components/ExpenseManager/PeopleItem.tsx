import BrightCard from "../UI/Cards/BrightCard";
import CheckButton from "../UI/Buttons/CheckButton";

import classes from "./PeopleItem.module.css";

const PeopleItem = (props) => {
    const { personData } = props;
    const amount = `$${personData.amount}`;

    const isAmountReturned = personData.hasReturned;

    const markCheckedHandler = () => {
        props.onCheckPerson(personData.id, personData.amount);
    };

    const amountNotReturnedYet = (
        <p className={classes.amount}>
            Owes you: <span>{amount}</span>
        </p>
    );

    const amountReturned = <p className={classes.amount}>Returned his due</p>;

    return (
        <BrightCard>
            <div>
                <p className={classes.name}>{personData.name}</p>
                {isAmountReturned ? amountReturned : amountNotReturnedYet}
            </div>
            <CheckButton onClick={markCheckedHandler} isAmountReturned={isAmountReturned} />
        </BrightCard>
    );
};

export default PeopleItem;
