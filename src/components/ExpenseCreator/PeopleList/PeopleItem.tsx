import classes from "./PeopleItem.module.css";

import BrightCard from "../../UI/Cards/BrightCard";
import RemoveButton from "../../UI/Buttons/RemoveButton";
import { PersonData } from "../../../types/types";

type PeopleItemProps = {
    personData: PersonData;
    onRemove: (id: string) => void;
};

const PeopleItem = ({ personData, onRemove }: PeopleItemProps) => {
    return (
        <BrightCard>
            <div>
                <p className={classes.name}>{personData.name}</p>
                <p className={classes.text}>
                    Owes you:<span>{` $${personData.amount}`}</span>
                </p>
            </div>
            <RemoveButton onClick={onRemove.bind(null, personData.id)} />
        </BrightCard>
    );
};

export default PeopleItem;
