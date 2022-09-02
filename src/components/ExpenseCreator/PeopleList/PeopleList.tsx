import classes from "./PeopleList.module.css";
import AddPeople from "./AddPeople";
import PeopleItem from "./PeopleItem";
import DarkCard from "../../UI/Cards/DarkCard";
import PlusButton from "../../UI/Buttons/PlusButton";
import { useState } from "react";
import { PersonData } from "../../../types/types";

type PeopleListProps = {
    peopleData: PersonData[];
    onAddPerson: (person: PersonData) => void;
    onRemovePerson: (personDue: number, updatedPeopleData: PersonData[]) => void;
};

const PeopleList = ({ peopleData, onAddPerson, onRemovePerson }: PeopleListProps) => {
    const [isAddPeopleShown, setIsAddPeopleShown] = useState(false);

    const showAddPeopleHandler = () => setIsAddPeopleShown(true);
    const hideAddPeopleHandler = () => setIsAddPeopleShown(false);

    const addPersonHandler = (enteredName: string, enteredAmount: number) => {
        const id = `${enteredName.slice(0, 1)}${peopleData.length}`;

        const person = {
            id: id,
            name: enteredName,
            amount: enteredAmount,
            hasReturned: false,
        };

        onAddPerson(person);
    };

    const removePersonHandler = (id: string) => {
        const updatedPeopleData = [...peopleData].filter((personData) => personData.id !== id);

        const personsIndex = peopleData.findIndex((personData) => personData.id === id);
        const personsDue = peopleData[personsIndex].amount;

        onRemovePerson(personsDue, updatedPeopleData);
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
                    <AddPeople
                        onHide={hideAddPeopleHandler}
                        onAddPerson={addPersonHandler}
                        peopleAmount={peopleData.length}
                    />
                )}
                {!isAddPeopleShown && <PlusButton onClick={showAddPeopleHandler} />}
            </DarkCard>
        </>
    );
};

export default PeopleList;
