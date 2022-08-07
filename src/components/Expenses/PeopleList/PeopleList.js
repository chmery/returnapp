import classes from "./PeopleList.module.css";
import PlusIcon from "../PlusIcon";
import AddPeople from "./AddPeople";
import PeopleItem from "./PeopleItem";
import DarkCard from "../../UI/Cards/DarkCard";

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
            <DarkCard>
                <div className={classes.icon}>
                    <PlusIcon />
                </div>
                {peopleList}
                <AddPeople />
            </DarkCard>
        </>
    );
};

export default People;
