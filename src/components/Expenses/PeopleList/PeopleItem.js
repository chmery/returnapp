import classes from "./PeopleItem.module.css";

import BrightCard from "../../UI/Cards/BrightCard";
import RemoveButton from "../../UI/Buttons/RemoveButton";

const PeopleItem = (props) => {
    const { personData } = props;
    const amount = ` $${personData.amount}`;

    return (
        <BrightCard>
            <div>
                <p className={classes.name}>{personData.name}</p>
                <p className={classes.text}>
                    Owes you:<span>{amount}</span>
                </p>
            </div>
            <RemoveButton onClick={props.onRemove.bind(null, personData.id)} />
        </BrightCard>
    );
};

export default PeopleItem;
