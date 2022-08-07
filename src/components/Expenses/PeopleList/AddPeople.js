import classes from "./AddPeople.module.css";
import Input from "../../UI/Input";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";

const AddPeople = () => {
    return (
        <div className={classes["add-people"]}>
            <div className={classes.inputs}>
                <Input input={{ id: "name", type: "text", placeholder: "Name" }} />
                <Input
                    narrow={true}
                    input={{ id: "return-amount", type: "number", placeholder: "Amount" }}
                />
            </div>
            <div className={classes.action}>
                <ButtonSecondary>Cancel</ButtonSecondary>
                <ButtonSecondary>Confirm</ButtonSecondary>
            </div>
        </div>
    );
};

export default AddPeople;
