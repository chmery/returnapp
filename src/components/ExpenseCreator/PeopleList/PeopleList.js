import classes from "./PeopleList.module.css";
import AddPeople from "./AddPeople";
import PeopleItem from "./PeopleItem";
import DarkCard from "../../UI/Cards/DarkCard";
import PlusButton from "../../UI/Buttons/PlusButton";
import { useState } from "react";

const PeopleList = (props) => {
    const { peopleData, onAddPerson, onRemovePerson } = props;
    const [isAddPeopleShown, setIsAddPeopleShown] = useState(false);

    const showAddPeopleHandler = () => setIsAddPeopleShown(true);
    const hideAddPeopleHandler = () => setIsAddPeopleShown(false);

    const addPersonHandler = (personData) => onAddPerson(personData);
    const removePersonHandler = (id) => onRemovePerson(id);

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
                    <AddPeople onCancel={hideAddPeopleHandler} onAddPerson={addPersonHandler} />
                )}
                {!isAddPeopleShown && <PlusButton onClick={showAddPeopleHandler} />}
            </DarkCard>
        </>
    );
};

export default PeopleList;
