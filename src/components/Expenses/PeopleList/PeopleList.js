import classes from "./PeopleList.module.css";
import PlusIcon from "../PlusIcon";
import AddPeople from "./AddPeople";
import PeopleItem from "./PeopleItem";

const People = () => {
    const TEST_DATA = [
        {
            name: "Andrew",
            amount: 23,
        },
    ];

    const peopleList = TEST_DATA.map((person) => <PeopleItem personData={person} />);

    return (
        <>
            <p className={classes.people}>People</p>
            <div className={classes["people-container"]}>
                <div className={classes.icon}>
                    <PlusIcon />
                </div>
                {peopleList}
                <AddPeople />
            </div>
        </>
    );
};

export default People;
