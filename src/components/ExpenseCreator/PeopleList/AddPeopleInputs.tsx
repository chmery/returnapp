import CurrencyInput from "react-currency-input-field";

import Input from "../../UI/Input/Input";
import classes from "./AddPeopleInputs.module.css";

type AddPeopleInputsProps = {
    nameValue: string;
    nameRef: React.MutableRefObject<HTMLInputElement>;
    amountValue: string;
    onNameChange: () => void;
    onAmountChange: (value: string) => void;
};

const AddPeopleInputs = ({
    nameValue,
    nameRef,
    amountValue,
    onNameChange,
    onAmountChange,
}: AddPeopleInputsProps) => {
    return (
        <div className={classes.inputs}>
            <Input
                ref={nameRef}
                input={{ id: "name", type: "text", placeholder: "Name", value: nameValue }}
                onChange={onNameChange}
            />
            <CurrencyInput
                id="amount"
                placeholder="Amount"
                prefix="$"
                maxLength={7}
                allowNegativeValue={false}
                decimalSeparator="."
                defaultValue={0}
                decimalsLimit={2}
                value={amountValue}
                onValueChange={(value) => onAmountChange(value!)}
            />
        </div>
    );
};

export default AddPeopleInputs;
