import classes from "./PeopleList.module.css";
import PlusIcon from "../PlusIcon";
import AddPeople from "./AddPeople";

const People = () => {
    return (
        <>
            <p className={classes.people}>People</p>
            <div className={classes["people-container"]}>
                <div className={classes.icon}>
                    <PlusIcon />
                </div>
                <AddPeople />
            </div>
        </>
    );
};

export default People;
