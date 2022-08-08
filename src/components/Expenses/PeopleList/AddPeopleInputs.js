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
            <Input
                ref={props.amountRef}
                narrow={true}
                input={{
                    id: "return-amount",
                    type: "number",
                    placeholder: "Amount",
                    value: props.amountValue,
                }}
                onChange={props.onAmountChange}
            />
        </div>
    );
};

export default AddPeopleInputs;
