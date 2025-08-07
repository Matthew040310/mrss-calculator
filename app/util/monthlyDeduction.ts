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
    if (!dropdownValue) return "Please select a top-up method";

    const month = dayjs(selectedDate).month() + 1; // dayjs months are 0-indexed

    const denom =
        12 -
        (dropdownValue === "E-GIRO"
            ? month + 1
            : month + 2) +
        1;

    if (denom <= 0) return "Not Applicable. Top-Up will only be effective next year";
    return "$" + String((desiredAmount / denom).toFixed(2));
}

export function followingYear(
    { selectedDate, desiredAmount, dropdownValue }: functionParams
) {
    if (!desiredAmount) return "Please enter a valid amount";
    const month = dayjs(selectedDate).month() + 1; // dayjs months are 0-indexed

    return "$" + String((desiredAmount / 11).toFixed(2));
}