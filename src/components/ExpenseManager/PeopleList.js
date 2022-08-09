import PeopleItem from "./PeopleItem";
import DarkCard from "../UI/Cards/DarkCard";

const PeopleList = (props) => {
    const { people } = props.managedExpense;

    const peopleList = people.map((personData) => (
        <PeopleItem
            key={personData.id}
            personData={personData}
            onCheckPerson={props.onCheckPerson}
        />
    ));

    return (
        <>
            <p>People</p>
            <DarkCard>{peopleList}</DarkCard>
        </>
    );
};

export default PeopleList;
