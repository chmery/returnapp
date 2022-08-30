import Summary from "../UI/Summary";
import { PersonIcon, BarsIcon } from "../UI/Icons";

type ExpenseInfo = {
    debtorsAmount?: number;
    returnAmount?: number;
};

const DebtorsInfo = ({ debtorsAmount }: ExpenseInfo) => {
    return (
        <div>
            <PersonIcon />
            <div>
                <p>Debtors:</p>
                <span>{debtorsAmount} / 10</span>
            </div>
        </div>
    );
};

const ReturnInfo = ({ returnAmount }: ExpenseInfo) => {
    return (
        <div style={{ flex: "1 40%" }}>
            <BarsIcon />
            <div>
                <p>Return amount:</p>
                <span>{`${returnAmount}`}</span>
            </div>
        </div>
    );
};

const ExpenseInfo = ({ returnAmount, debtorsAmount }: ExpenseInfo) => {
    return (
        <Summary>
            <ReturnInfo returnAmount={returnAmount} />
            <DebtorsInfo debtorsAmount={debtorsAmount} />
        </Summary>
    );
};

export default ExpenseInfo;
