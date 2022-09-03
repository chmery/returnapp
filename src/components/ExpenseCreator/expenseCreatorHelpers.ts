import { PersonData } from "../../types/types";

export const isExpenseValid = (title: string, peopleData: PersonData[]) => {
    if (title.length === 0) {
        const errorMessage = "Title can't be empty";
        return errorMessage;
    }

    if (peopleData.length === 0) {
        const errorMessage = "You need to add one person at least.";
        return errorMessage;
    }

    return true;
};

export const formatSummedAmount = (personData: PersonData, prevExpenseAmount: number) => {
    const prevAmountFormated = prevExpenseAmount * 100;
    const newAmountFormated = personData.amount * 100;

    const summedExpenseAmount = (prevAmountFormated + newAmountFormated) / 100;
    return summedExpenseAmount;
};

export const formatSubstractedAmount = (personsDue: number, prevExpenseAmount: number) => {
    const prevAmountFormated = prevExpenseAmount * 100;
    const personsDueFormated = personsDue * 100;

    const substractedExpenseAmount = (prevAmountFormated - personsDueFormated) / 100;
    return substractedExpenseAmount;
};
