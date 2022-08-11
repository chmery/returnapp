import CurrencyInput from "react-currency-input-field";

import Input from "../../UI/Input";
import classes from "./AddPeopleInputs.module.css";

const AddPeopleInputs = (props) => {
    return (
        <div className={classes.inputs}>
            <Input
                ref={props.nameRef}
                input={{ id: "name", type: "text", placeholder: "Name", value: props.nameValue }}
                onChange={props.onNameChange}
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
                value={props.amountValue}
                onValueChange={(value) => props.onAmountChange(value)}
            />
        </div>
    );
};

export default AddPeopleInputs;
