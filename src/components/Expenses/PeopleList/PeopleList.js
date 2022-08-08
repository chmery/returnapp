import classes from "./PeopleList.module.css";
import PlusIcon from "../../UI/Buttons/PlusIcon";
import AddPeople from "./AddPeople";
import PeopleItem from "./PeopleItem";
import DarkCard from "../../UI/Cards/DarkCard";
import PlusButton from "../../UI/Buttons/PlusButton";
import { useState } from "react";

//{peopleList}

const People = () => {
    const [isAddPeopleShown, setIsAddPeopleShown] = useState(false);

    const TEST_DATA = [
        {
            name: "Andrew",
            amount: 23,
        },
    ];

    const peopleList = TEST_DATA.map((person) => <PeopleItem personData={person} />);

    const showAddPeopleHandler = () => setIsAddPeopleShown(true);
    const hideAddPeopleHandler = () => setIsAddPeopleShown(false);

    return (
        <>
            <p className={classes.people}>People</p>
            <DarkCard>
                {!isAddPeopleShown && <PlusButton onClick={showAddPeopleHandler} />}
                {isAddPeopleShown && <AddPeople onCancel={hideAddPeopleHandler} />}
            </DarkCard>
        </>
    );
};

export default People;
