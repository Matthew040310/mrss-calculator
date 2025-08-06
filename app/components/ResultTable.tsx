import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import dayjs from "dayjs";

import { currentYear, followingYear } from "../util/monthlyDeduction";

interface ResultTableProps {
    selectedDate: dayjs.Dayjs | null;
    desiredAmount: number | '';
    dropdownValue: string | null;
}

const LeftColumnStyle = {
    fontWeight: "bold",
    borderRight: "1px solid rgba(224, 224, 224, 1)"
}

const ResultTable: React.FC<ResultTableProps> = ({
    selectedDate, desiredAmount, dropdownValue
}) => {
    const effectiveMonth = dropdownValue === "E-GIRO"
        ? dayjs(selectedDate).add(1, 'month').format('MMMM')
        : dayjs(selectedDate).add(2, 'month').format('MMMM')
    const currentYearDeduction = currentYear({ selectedDate, desiredAmount, dropdownValue });
    const followingYearDeduction = followingYear({ selectedDate, desiredAmount, dropdownValue });

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "18px", width: "45%" }}>Results</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={LeftColumnStyle}>Effective Month</TableCell>
                        <TableCell component="th" scope="row" >{dropdownValue ? effectiveMonth : 'Select Top-Up Method'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={LeftColumnStyle}>Estimated Monthly Deduction (Current Year)</TableCell>
                        <TableCell component="th" scope="row">{currentYearDeduction}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={LeftColumnStyle}>Estimated Monthly Deduction (Following Year)</TableCell>
                        <TableCell component="th" scope="row">{followingYearDeduction}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default ResultTable