import classes from "./PeopleList.module.css";
import AddPeople from "./AddPeople";
import PeopleItem from "./PeopleItem";
import DarkCard from "../../UI/Cards/DarkCard";
import PlusButton from "../../UI/Buttons/PlusButton";
import { useState } from "react";

const People = () => {
    const [isAddPeopleShown, setIsAddPeopleShown] = useState(false);
    const [peopleData, setPeopleData] = useState([]);

    const showAddPeopleHandler = () => setIsAddPeopleShown(true);
    const hideAddPeopleHandler = () => setIsAddPeopleShown(false);

    const addPersonHandler = (personData) => {
        const name = personData.name;
        const amount = personData.amount;
        const id = `${name.slice(0, 1)}${peopleData.length}`;

        setPeopleData((prevPeopleData) => {
            return [...prevPeopleData, { id, name, amount }];
        });
    };

    const removePersonHandler = (id) => {
        const updatedPeopleData = [...peopleData].filter((personData) => personData.id !== id);
        setPeopleData(updatedPeopleData);
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

export default People;
