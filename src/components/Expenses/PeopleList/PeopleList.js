import classes from "./PeopleList.module.css";
import AddPeople from "./AddPeople";
import PeopleItem from "./PeopleItem";
import DarkCard from "../../UI/Cards/DarkCard";
import PlusButton from "../../UI/Buttons/PlusButton";
import { useState } from "react";

const People = () => {
    const [isAddPeopleShown, setIsAddPeopleShown] = useState(false);
    const [peopleData, setPeopleData] = useState([]);

    const peopleList = peopleData.map((personData) => <PeopleItem personData={personData} />);

    const showAddPeopleHandler = () => setIsAddPeopleShown(true);
    const hideAddPeopleHandler = () => setIsAddPeopleShown(false);

    const addPersonHandler = (personData) => {
        const name = personData.name;
        const amount = personData.amount;

        setPeopleData((prevPeopleData) => {
            return [...prevPeopleData, { name, amount }];
        });
    };

    const isListEmpty = peopleData.length < 1;

    return (
        <>
            <p className={classes.people}>People</p>
            <DarkCard>
                {!isListEmpty && peopleList}
                {isAddPeopleShown && (
                    <AddPeople onCancel={hideAddPeopleHandler} onAddPerson={addPersonHandler} />
                )}
                {!isAddPeopleShown && <PlusButton onClick={showAddPeopleHandler} />}
            </DarkCard>
        </>
    );
};

export default People;
