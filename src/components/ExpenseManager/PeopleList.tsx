import PeopleItem from "./PeopleItem";
import DarkCard from "../UI/Cards/DarkCard";
import { PersonData } from "../ExpenseCreator/ExpenseCreator";

type ExpenseData = {
    id: string;
    title: string;
    amount: number;
    amountReturned: number;
    people: PersonData[];
};

type Props = {
    managedExpense: ExpenseData;
    onCheckPerson: (id: string, amount: number) => void;
};

const PeopleList = ({ managedExpense, onCheckPerson }: Props) => {
    const { people } = managedExpense;

    const peopleList = people.map((personData) => (
        <PeopleItem key={personData.id} personData={personData} onCheckPerson={onCheckPerson} />
    ));

    return (
        <>
            <p>People</p>
            <DarkCard>{peopleList}</DarkCard>
        </>
    );
};

export default PeopleList;
