import Summary from "../UI/Summary";
import ButtonSecondary from "../UI/Buttons/ButtonSecondary";
import { LayersIcon, BarsIcon } from "../UI/Icons";
import { PersonData } from "../ExpenseCreator/ExpenseCreator";

type ExpenseData = {
    id: string;
    title: string;
    amount: number;
    amountReturned: number;
    people: PersonData[];
};

type Props = {
    expenseData: ExpenseData;
    onRemove: (id: string) => void;
};

const ExpenseData = ({ expenseData, onRemove }: Props) => {
    const title = `${expenseData.title} `;
    const amount = `$${expenseData.amount}`;
    const amountReturned = ` $${expenseData.amountReturned}`;

    const onRemoveHandler = () => onRemove(expenseData.id);

    return (
        <Summary>
            <div style={{ width: "100%" }}>
                <LayersIcon />
                <div>
                    <p>Title:</p>
                    <span>{title}</span>
                </div>
            </div>
            <div style={{ flex: "1 30%" }}>
                <BarsIcon color={"var(--red)"} />
                <div>
                    <p>To return:</p>
                    <span>{amount}</span>
                </div>
            </div>
            <div style={{ flex: "1 30%" }}>
                <BarsIcon />
                <div>
                    <p>Returned:</p>
                    <span>{amountReturned}</span>
                </div>
            </div>
            <ButtonSecondary onClick={onRemoveHandler}>Remove Expense</ButtonSecondary>
        </Summary>
    );
};

export default ExpenseData;
