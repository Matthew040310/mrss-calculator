import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import dayjs from "dayjs";

import { currentYear, followingYear } from "../util/monthlyDeduction";

interface ResultTableProps {
    selectedDate: dayjs.Dayjs | null;
    desiredAmount: number | '';
    dropdownValue: string | null;
}

const ResultTable: React.FC<ResultTableProps> = ({
    selectedDate, desiredAmount, dropdownValue
}) => {
    const currentYearDeduction = currentYear({ selectedDate, desiredAmount, dropdownValue });
    const followingYearDeduction = followingYear({ selectedDate, desiredAmount, dropdownValue });

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "18px", width: "45%" }}>Results</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>Effective Month</TableCell>
                        <TableCell component="th" scope="row">{dayjs(selectedDate).format('MMMM')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>Estimated Monthly Deduction (Current Year)</TableCell>
                        <TableCell component="th" scope="row">{currentYearDeduction}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>Estimated Monthly Deduction (Following Year)</TableCell>
                        <TableCell component="th" scope="row">{followingYearDeduction}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default ResultTable