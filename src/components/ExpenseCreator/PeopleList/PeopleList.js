import classes from "./PeopleList.module.css";
import AddPeople from "./AddPeople";
import PeopleItem from "./PeopleItem";
import DarkCard from "../../UI/Cards/DarkCard";
import PlusButton from "../../UI/Buttons/PlusButton";
import { useState } from "react";

const PeopleList = (props) => {
    const { peopleData } = props;
    const [isAddPeopleShown, setIsAddPeopleShown] = useState(false);

    const showAddPeopleHandler = () => setIsAddPeopleShown(true);
    const hideAddPeopleHandler = () => setIsAddPeopleShown(false);

    const addPersonHandler = (personData) => {
        const name = personData.name;
        const amount = personData.amount;
        const id = `${name.slice(0, 1)}${peopleData.length}`;

        const person = {
            id: id,
            name: name,
            amount: amount,
            hasReturned: false,
        };

        props.onAddPerson(person);
    };

    const removePersonHandler = (id) => {
        const updatedPeopleData = [...peopleData].filter((personData) => personData.id !== id);

        const personsIndex = peopleData.findIndex((personData) => personData.id === id);
        const personsDue = peopleData[personsIndex].amount;

        console.log(personsDue);

        props.onRemovePerson(personsDue, updatedPeopleData);
    };

    const peopleList = peopleData.map((personData) => {
        const isListEmpty = peopleData.length === 0;
        if (isListEmpty) return;

        return (
            <PeopleItem
                key={personData.id}
                personData={personData}
                onRemove={removePersonHandler}
            />
        );
    });

    return (
        <>
            <p className={classes.people}>People</p>
            <DarkCard>
                {peopleList}
                {isAddPeopleShown && (
                    <AddPeople onHide={hideAddPeopleHandler} onAddPerson={addPersonHandler} />
                )}
                {!isAddPeopleShown && <PlusButton onClick={showAddPeopleHandler} />}
            </DarkCard>
        </>
    );
};

export default PeopleList;
