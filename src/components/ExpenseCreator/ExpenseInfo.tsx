import Summary from "../UI/Summary";
import { PersonIcon, BarsIcon } from "../UI/Icons";

const DebtorsInfo = (props) => {
    const debtorsNum = props.debtorsAmount;

    return (
        <div>
            <PersonIcon />
            <div>
                <p>Debtors:</p>
                <span>{debtorsNum} / 10</span>
            </div>
        </div>
    );
};

const ReturnInfo = (props) => {
    const returnAmount = `$${props.returnAmount}`;

    return (
        <div style={{ flex: "1 40%" }}>
            <BarsIcon />
            <div>
                <p>Return amount:</p>
                <span>{returnAmount}</span>
            </div>
        </div>
    );
};

const ExpenseInfo = (props) => {
    return (
        <Summary>
            <ReturnInfo returnAmount={props.returnAmount} />
            <DebtorsInfo debtorsAmount={props.debtorsAmount} />
        </Summary>
    );
};

export default ExpenseInfo;
