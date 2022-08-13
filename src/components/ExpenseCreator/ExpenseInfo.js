import Summary from "../UI/Summary";
import { PersonIcon, BarsIcon } from "../UI/Icons";

const DebtorsInfo = (props) => {
    const debtorsNum = props.debtorsAmount;

    return (
        <div style={{ width: "40%" }}>
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
        <div style={{ width: "60%" }}>
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
