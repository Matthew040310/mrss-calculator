import dayjs from "dayjs";

interface functionParams {
    selectedDate: dayjs.Dayjs | null;
    desiredAmount: number | '';
    dropdownValue: string | null;
}

export function currentYear(
    { selectedDate, desiredAmount, dropdownValue }: functionParams
) {
    if (!selectedDate) return "Please select a date";
    if (!desiredAmount) return "Please enter a valid amount";
    if (!dropdownValue) return "Please select a deduction method";

    const month = dayjs(selectedDate).month() + 1; // dayjs months are 0-indexed
    if (month === 12) return 0;

    const denom =
        12 -
        (dropdownValue === "E-GIRO"
            ? month + 1
            : month + 2) +
        1;

    return "$" + String((desiredAmount / denom).toFixed(2));
}

export function followingYear(
    { selectedDate, desiredAmount, dropdownValue }: functionParams
) {
    if (!desiredAmount) return "Please enter a valid amount";
    return "$" + String((desiredAmount / 12).toFixed(2))
}