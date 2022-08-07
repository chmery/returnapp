import classes from "./PeopleList.module.css";
import PlusIcon from "../PlusIcon";

const People = () => {
    return (
        <>
            <p className={classes.people}>People</p>
            <div className={classes["people-container"]}>
                <div className={classes.icon}>
                    <PlusIcon />
                </div>
            </div>
        </>
    );
};

export default People;
