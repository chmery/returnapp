import classes from "./AddPeople.module.css";
import Input from "../../UI/Input";

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
                <button>Cancel</button>
                <button>Confirm</button>
            </div>
        </div>
    );
};

export default AddPeople;
