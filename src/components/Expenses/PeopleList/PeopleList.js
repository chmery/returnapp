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
        props.onAddPerson(personData);
    };

    const removePersonHandler = (id) => {
        props.onRemovePerson(id);
    };

    const peopleList = peopleData.map((personData) => (
        <PeopleItem key={personData.id} personData={personData} onRemove={removePersonHandler} />
    ));

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

export default PeopleList;
