export type PersonData = {
    id: string;
    name: string;
    amount: number;
    hasReturned: boolean;
};

export type ExpenseData = {
    id: string;
    title: string;
    amount: number;
    amountReturned: number;
    people: PersonData[];
};
